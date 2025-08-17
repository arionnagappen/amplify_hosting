#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { AmplifyInfrastructureStack } from '../lib/stacks/amplify-stack'

const app = new cdk.App()

// Configure here (easy for devs)
const amplifyConfig = {
  appName: 'Test-Hosting',
  repoOwner: 'arionnagappen',
  repoName: 'amplify_hosting',
  oauthSecretName: 'github-token-amplify',
}

new AmplifyInfrastructureStack(app, 'AmplifyInfrastructureStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  amplify: amplifyConfig,
})
