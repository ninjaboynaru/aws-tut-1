import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

const region = 'us-east-2'
const dbbClient = new DynamoDBClient({ region })
export { dbbClient }