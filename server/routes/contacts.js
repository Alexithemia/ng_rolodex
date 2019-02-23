const express = require('express');
const router = express.Router();
const Contact = require('../database/models/Contact');
const User = require('../database/models/User');

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { next(); }
  else {
    res.status(401).json({ success: false, error: 'not authenticated' });
  };
};

router.route('/')
  .get(isAuthenticated, function (req, res) {
    Contact.where('created_by', req.user.id).fetchAll({
      columns: ['id', 'name', 'address', 'mobile', 'work', 'home', 'email', 'twitter', 'instagram', 'github']
    })
      .then(function (contactList) {
        res.json(contactList);
      })
      .catch(function (err) {
        res.json(err);
      });
  })
  .post(isAuthenticated, function (req, res) {
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
  .get(isAuthenticated, function (req, res) {
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
      columns: ['id', 'name', 'address', 'mobile', 'work', 'home', 'email', 'twitter', 'instagram', 'github']
    })
      .then(function (contactList) {
        res.json(contactList);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

router.route('/:id')
  .get(isAuthenticated, function (req, res) {
    Contact.where('id', req.params.id).fetch({
      columns: ['id', 'name', 'address', 'mobile', 'work', 'home', 'email', 'twitter', 'instagram', 'github']
    })
      .then(function (contact) {
        res.json(contact)
      })
      .catch(function (err) {
        res.json({ success: false, error: err })
      });
  })
  .put(isAuthenticated, function (req, res) {
    let tempObj = {}
    if (req.body.name) { tempObj.name = req.body.name };
    if (req.body.address) { tempObj.address = req.body.address };
    if (req.body.mobile) { tempObj.mobile = req.body.mobile };
    if (req.body.work) { tempObj.work = req.body.work };
    if (req.body.home) { tempObj.home = req.body.home };
    if (req.body.email) { tempObj.email = req.body.email };
    if (req.body.twitter) { tempObj.twitter = req.body.twitter };
    if (req.body.instagram) { tempObj.instagram = req.body.instagram };
    if (req.body.github) { tempObj.github = req.body.github };

    Contact.where('id', req.params.id).save(tempObj, { patch: true })
      .then(function () {
        res.json({ success: true });
      })
      .catch(function (err) {
        res.json({ success: false, error: err });
      });
  })
  .delete(isAuthenticated, function (req, res) {
    new Contact({ id: req.params.id }).destroy()
      .then(function () {
        res.json({ success: true });
      })
      .catch(function (err) {
        res.status(500).json({ success: false, error: err });
      });
  })

module.exports = router;