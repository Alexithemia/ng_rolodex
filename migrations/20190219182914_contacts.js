
exports.up = function (knex, Promise) {
  return knex.schema.createTable('contacts', function (t) {
    t.increments().primary();
    t.string('name').notNullable();
    t.string('address');
    t.string('mobile');
    t.string('work');
    t.string('home');
    t.string('email');
    t.string('twitter');
    t.string('instagram');
    t.string('github');
    t.integer('created_by');
    t.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contacts');
};
