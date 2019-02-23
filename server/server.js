const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const redis = require('connect-redis')(session);

const User = require('./database/models/User');
const app = express();
const PORT = process.env.SERVER_PORT;
const ENV = process.env.NODE_ENV;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_URI = process.env.REDIS_HOST + ':' + process.env.REDIS_HOST_PORT;

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(session({
  store: new redis({ url: REDIS_URI, logErrors: true }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  return done(null, {
    id: user.id
  });
});

passport.deserializeUser((user, done) => {
  new User({ id: user.id }).fetch()
    .then(dbUser => {
      dbUser = dbUser.toJSON();
      return done(null, {
        id: dbUser.id,
        username: dbUser.username
      });
    })
    .catch((err) => {
      console.log(err);
      return done(err);
    });
});

passport.use(new LocalStrategy(function (username, password, done) {
  return new User({ username: username })
    .fetch()
    .then((user) => {
      if (user === null) {
        return done(null, false, { message: 'bad username or password' });
      }
      else {
        user = user.toJSON();
        bcrypt.compare(password, user.password)
          .then((res) => {
            if (res) { return done(null, user); }
            else {
              return done(null, false, { message: 'bad username or password' });
            }
          });
      }
    })
    .catch(err => {
      console.log('error: ', err);
      return done(err);
    });
}));

app.use('/api', api);

app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});

module.exports = app;