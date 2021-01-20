const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-upload-al',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://dfqhvoidr9.execute-api.us-east-1.amazonaws.com',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_9hNiLVM2s',
    APP_CLIENT_ID: '6o13979ktlosqddcc96uca81rm',
    IDENTITY_POOL_ID: 'us-east-1:bdeaef5b-cec4-4b38-b7e9-cb22a8bfde73',
  },
};

export default config;
