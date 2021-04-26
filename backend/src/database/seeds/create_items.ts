import { Knex} from "knex";
export async function seed(knex: Knex) {
  return knex("products").insert([
    {
      title: "Lâmpada CLL",
      price: 10.0,
      quantity: 4
    },
    {
      title: "Oculos Escuro",
      price: 310,
      quantity: 7
    },
    {
      title: "Arroz",
      price: 22.50,
      quantity: 170
    },
    {
      title: "Feijão",
      price: 15.40,
      quantity: 810
    },
    {
      title: "Macarrão",
      price: 17.85,
      quantity: 900
    },
  ]);
}
