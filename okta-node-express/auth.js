var passport = require('passport');
var config = require('./config.json');

exports.initalize = passport.initalize;
exports.session = passport.session;
exports.authenticate = passport.authenticate;


exports.protected = function protected(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
};

passport.use(new SamlStrategy(
  { 
  	path: '/login/callback',
    entryPoint: config.auth.target_url,
    protocol: 'https://',
    cert: config.auth.fingerprint
  },
  function(profile, done) {
    findByEmail(profile.email, function(err, user) {
      if (err) {
        return done(err);
      }
      return done(null, user);
    });
  })
));