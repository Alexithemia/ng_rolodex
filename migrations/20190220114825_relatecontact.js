
exports.up = function (knex, Promise) {
  return knex.schema.alterTable('contacts', function (t) {
    t.foreign('created_by').references('id').inTable('users');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('contacts', function (t) {
    t.dropForeign('created_by');
  });
};
