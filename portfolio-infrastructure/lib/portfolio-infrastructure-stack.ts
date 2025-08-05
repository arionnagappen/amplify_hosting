import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from '@aws-cdk/aws-amplify-alpha'
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import { version } from 'os';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
      appName: 'Portfolio',

      // Connect to my GitHub Repo
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'arionnagappen',
        repository: 'amplify_hosting',
        oauthToken: cdk.SecretValue.secretsManager('github-token-amplify')
      }),

      // Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "starting this build"',
                'cd portfolio',
                'npm install'
              ],
            },
            build: {
              commands: [
                'echo "building our nextjs app..."',
                'npm run build-and-export',
                'echo "build is completes"'
              ],
            },
          },
          artifacts: {
            baseDirectory: 'portfolio/out',
            files: ['**/*'],
          },
          cache: {
            paths: [
              'node/modules/**/*',
              '.next/cache/**/*'
            ]
          }
        }
      })
    })

    // Every update made to the main branch is deployed into production
    const mainBranch = amplifyApp.addBranch('main',{
      autoBuild: true
    })
  }
}
