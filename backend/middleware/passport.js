const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");

passport.use(
  new googleStrategy(
    {
      clientID:
        "603902936396-cdakpsijubv4j9rgmil8ic3sjusvgv49.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;
