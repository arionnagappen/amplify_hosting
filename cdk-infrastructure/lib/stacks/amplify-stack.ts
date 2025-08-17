import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { AmplifyConstruct, AmplifyProps } from '../constructs/amplify-construct'

export interface AmplifyInfrastructureStackProps extends cdk.StackProps {
  amplify: AmplifyProps
}

export class AmplifyInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AmplifyInfrastructureStackProps) {
    super(scope, id, props)

    new AmplifyConstruct(this, 'Amplify', props.amplify)
  }
}
