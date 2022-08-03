/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (t) => {
      t.increments("project_id");
      t.string("project_name").notNullable();
      t.string("project_description");
      t.integer("project_completed").defaultTo(0);
    })
    .createTable("resources", (t) => {
      t.increments("resource_id");
      t.string("resource_name").notNullable().unique();
      t.string("resource_description");
    })
    .createTable("tasks", (t) => {
      t.increments("task_id");
      t.string("task_description").notNullable();
      t.string("task_notes");
      t.integer("task_completed").defaultTo(0);
      t.integer("project_id").unsigned().notNullable().references("project_id").inTable("projects");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks").dropTableIfExists("resources").dropTableIfExists("projects");
};
