export default {
  MAX_ATTACHMENT_SIZE: 1000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "homecook-api-dev-attachmentsbucket-illo723e2gd8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://d9bh7msimd.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_q2FGPSWz1",
    APP_CLIENT_ID: "4qhr06vm597bp7m0duu9pln7vu",
    IDENTITY_POOL_ID: "us-east-1:4301b2e6-3809-4b1c-9d25-a00c9ba3268b"
  }
};
