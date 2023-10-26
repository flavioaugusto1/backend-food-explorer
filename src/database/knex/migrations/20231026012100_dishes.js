exports.up = knex => knex.schema.createTable("dishes", (table) => {
  table.increments("id").primary();
  table.string("name");
  table.string("description");
  table.string("image");
  table.string("price");
  table.string("category");
  table.datetime("created_at").default(knex.fn.now());
  table.datetime("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("dishes");
