const bookshelf = require('./bookshelf');
const Contact = require('./Contact');

class User extends bookshelf.Model {
  get tableName() { return 'users' }
  get hasTimeStamps() { return true }

  userContacts() {
    return this.hasMany(Contact, 'created_by');
  }
};

module.exports = bookshelf.model('User', User);