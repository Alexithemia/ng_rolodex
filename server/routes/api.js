const express = require('express');
const router = express.Router();
const contacts = require('./contacts');
const User = require('../database/models/User')

router.route('/profile')
  .get(function (req, res) {
    User.where('id', req.user.id).fetch({
      columns: ['id', 'username', 'name', 'email', 'address']
    })
      .then(function (user) {
        res.json(user);
      })
      .catch(function (err) {
        res.json(err);
      })
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
      })
  });

router.use('/contacts', contacts);


module.exports = router;