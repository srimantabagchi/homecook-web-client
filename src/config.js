export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "cookriz-api-dev-attachmentsbucket-q1b46uvioyxw"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6h6969mgv7.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_1N7Vw3123",
    APP_CLIENT_ID: "3b901fu4pk5v41ohqc866jvhva",
    IDENTITY_POOL_ID: "us-east-1:e90a6441-d1a1-4059-b585-7c6d4c43bf58"
  }
};
