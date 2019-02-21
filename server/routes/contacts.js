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