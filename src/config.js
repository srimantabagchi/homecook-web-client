export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-file-upload-folder"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://mupjfuz69g.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_FNXemQy5q",
    APP_CLIENT_ID: "1idaoktd6e022ruk1ohpuj9436",
    IDENTITY_POOL_ID: "us-east-1:ee7b91b1-7d65-428e-a429-9f5554dc3e5f"
  }
};
