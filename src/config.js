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
    IDENTITY_POOL_ID: 'us-east-1:2de77502-1cb7-4daf-87a3-cc925b1e0290',
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_51HK6RkFY4YknzBeLnssXT7XI30nIFjAEkMycGAWFSQWfEHUmte3s1JDzBkTNH6FuSVwZrP6LFkE010PsBO9EPBJ600gChupaLi",
};

export default config;
