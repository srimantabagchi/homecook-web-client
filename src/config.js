export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "cookriz-api-dev-attachmentsbucket-xx794jfftsdt"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ph8dyikou5.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ATn5p2KEL",
    APP_CLIENT_ID: "64r4vd6dh32tl69demvch65th2",
    IDENTITY_POOL_ID: "us-east-1:18cdf725-2e59-4c9c-a052-a79ec9108819"
  }
};
