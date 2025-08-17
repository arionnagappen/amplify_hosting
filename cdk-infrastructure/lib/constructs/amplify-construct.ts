import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as amplify from '@aws-cdk/aws-amplify-alpha'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'

export interface AmplifyProps {
  appName: string
  repoOwner: string
  repoName: string
  oauthSecretName: string // Secrets Manager secret with GitHub token
}

export class AmplifyConstruct extends Construct {
  public readonly app: amplify.App

  constructor(scope: Construct, id: string, props: AmplifyProps) {
    super(scope, id)

    const source = new amplify.GitHubSourceCodeProvider({
      owner: props.repoOwner,
      repository: props.repoName,
      oauthToken: cdk.SecretValue.secretsManager(props.oauthSecretName),
    })

    this.app = new amplify.App(this, 'AmplifyApplication', {
      appName: props.appName,
      sourceCodeProvider: source,
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: { 
              commands: [
                'echo "starting this build"', 
                'cd portfolio', 
                'npm install'
              ] 
            },
            build: { commands: [
              'echo "building our nextjs app..."', 
              'npm run build', 
              'echo "build is completes"'
              ] 
            },
          },
          artifacts: { 
            baseDirectory: 'portfolio/out', 
            files: ['**/*'] 
          },
          cache: { 
            paths: [
              'node_modules/**/*', 
              '.next/cache/**/*'
            ] 
          },
        },
      }),
    })

    // Simple: just these two branches
    this.app.addBranch('staging', { autoBuild: true })
    this.app.addBranch('main',    { autoBuild: true })
  }
}
