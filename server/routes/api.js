const express = require('express');
const router = express.Router();
const contacts = require('./contacts');
const User = require('../database/models/User');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const saltRounds = 12;

router.route('/profile')
  .get(function (req, res) {
    User.where('id', req.user.id).fetch({
      columns: ['username', 'name', 'email', 'address']
    })
      .then(function (user) {
        res.json(user);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

router.route('/users')
  .put(function (req, res) {
    User.where('id', req.user.id).save({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address
    }, { patch: true })
      .then(function () {
        res.json({ success: true });
      })
      .catch(function (err) {
        res.json(err);
      });
  });

router.post('/register', (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      return res.status(500).json({ success: false, error: err })
    }
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        return res.status(500).json({ success: false, error: err })
      }
      return new User({
        username: req.body.username,
        password: hash,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
      })
        .save()
        .then((user) => {
          res.json({ success: true });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ success: false, error: err });
        });
    });
  });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
  res.json({ success: true, id: req.user.id });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true });
});

router.use('/contacts', contacts);


module.exports = router;