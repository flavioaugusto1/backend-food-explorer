exports.up = knex => knex.schema.createTable('ingredients', table => {
  table.increments('id').primary();
  table.string('name');
  table.integer('dishes_id')
  .references('id')
  .inTable('dishes')
  .onDelete('CASCADE')
  table.datetime('created_at').default(knex.fn.now());
  table.datetime('updated_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('ingredients');
