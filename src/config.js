const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-upload-al',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://dfqhvoidr9.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_9hNiLVM2s',
    APP_CLIENT_ID: '6o13979ktlosqddcc96uca81rm',
    IDENTITY_POOL_ID: 'us-east-1:652b75d1-d008-45de-94a9-3163967c2e7a',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;
