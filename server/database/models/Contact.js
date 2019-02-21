const bookshelf = require('./bookshelf');


class Contact extends bookshelf.Model {
  get tableName() { return 'contacts' }
  get hasTimeStamps() { return true }
  createdByUser() {
    return this.belongsTo('User', 'created_by', 'id');
  }
};

module.exports = bookshelf.model('Contact', Contact);