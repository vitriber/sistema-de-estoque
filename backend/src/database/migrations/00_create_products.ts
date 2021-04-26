import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable('products', (table: any) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.decimal("price").notNullable();
    table.integer("quantity").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('products');
}