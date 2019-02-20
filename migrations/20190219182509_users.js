
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (t) {
    t.increments().primary();
    t.string('username').unique().notNullable();
    t.string('password').notNullable();
    t.string('name');
    t.string('email');
    t.string('address');
    t.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
