module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 5000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://cybage-sso-demo-dev.onelogin.com/trust/saml2/http-post/sso/728295',
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || null
      }
    }
  }
};
