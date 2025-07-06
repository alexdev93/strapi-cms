module.exports = ({ env }) => ({
  // ✅ Email provider config
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env.int("SMTP_PORT"),
        secure: false, // true for port 465
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
      },
    },
  },

  // ✅ Social login providers config
  "users-permissions": {
    config: {
      providers: {
        google: {
          clientId: env("GOOGLE_CLIENT_ID"),
          clientSecret: env("GOOGLE_CLIENT_SECRET"),
          redirectUri: env("GOOGLE_REDIRECT_URI"),
        },
      },
    },
  },
});
