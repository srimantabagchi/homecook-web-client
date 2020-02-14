export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "kanalytics-api-dev-attachmentsbucket-1x74zf3wn7ycd"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sgaxna9mw1.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_F5ZVZKxsY",
    APP_CLIENT_ID: "32n8gaeecsd328l1atusqbpprh",
    IDENTITY_POOL_ID: "us-east-1:4980930b-b5b6-4f26-9d4b-78372a614c7b"
  }
};
