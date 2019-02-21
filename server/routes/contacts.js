const express = require('express');
const router = express.Router();
const Contact = require('../database/models/Contact');
const User = require('../database/models/User');

router.route('/')
  .get(function (req, res) {
    Contact.where('created_by', req.user.id).fetchAll({
      columns: ['name', 'address', 'mobile', 'work', 'home', 'email', 'twitter', 'instagram', 'github']
    })
      .then(function (contactList) {
        res.json(contactList);
      })
      .catch(function (err) {
        res.json(err);
      });
  })
  .post(function (req, res) {
    Contact.forge({
      name: req.body.name,
      address: req.body.address,
      mobile: req.body.mobile,
      work: req.body.work,
      home: req.body.home,
      email: req.body.email,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      github: req.body.github,
      created_by: req.user.id
    }).save()
      .then(function () {
        res.json({ success: true });
      })
      .catch(function (err) {
        res.json({ success: false, error: err })
      })
  })

router.route('/search/:term')
  .get(function (req, res) {
    Contact.query(function (search) {
      search.where('created_by', req.user.id)
        .andWhere(function () {
          let term = `%${req.params.term}%`
          this.whereRaw('LOWER(name) LIKE ?', term)
            .orWhereRaw('LOWER(address) LIKE ?', term)
            .orWhereRaw('LOWER(mobile) LIKE ?', term)
            .orWhereRaw('LOWER(work) LIKE ?', term)
            .orWhereRaw('LOWER(home) LIKE ?', term)
            .orWhereRaw('LOWER(email) LIKE ?', term)
            .orWhereRaw('LOWER(twitter) LIKE ?', term)
            .orWhereRaw('LOWER(instagram) LIKE ?', term)
            .orWhereRaw('LOWER(github) LIKE ?', term)
        })
    }).fetchAll({
      columns: ['name', 'address', 'mobile', 'work', 'home', 'email', 'twitter', 'instagram', 'github']
    })
      .then(function (contactList) {
        res.json(contactList);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

module.exports = router;