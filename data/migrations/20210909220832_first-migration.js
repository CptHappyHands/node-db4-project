exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name").notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name").notNullable();
    })
    .createTable("ingredient_quantities", (table) => {
      table.increments("ingredient_quantity_id");
      table.string("ingredient_quantity").notNullable();
      table
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredient_id")
        .inTable("ingredients");
      table
        .integer("step_id")
        .notNullable()
        .unsigned()
        .references("step_id")
        .inTable("steps");
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number").notNullable().unsigned();
      table.string("step_instructions").notNullable();
      table
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipe_id")
        .inTable("recipes");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredient_quantities")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
