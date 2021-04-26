import { Request, Response } from "express";
import knex from "../database/connection";

class ProductsController {
  async index(request: Request, response: Response) {
    const products = await knex('products').select('*');

    return response.json(products);
  }

  async indexOf(request: Request, response: Response) {
    const id = request.params.id;

    const product = await knex("products").where("id", id).first();

    return response.json(product);
  }

  async edit(request: Request, response: Response) {
    const id = request.params.id;

    const {
        title,
        price,
        quantity,
      } = request.body;

    const product = await knex("products").where("id", id).first();

    if (!product) {
      return response.status(400).json({ message: "Product not found." });
    }

    await knex("products")
      .where("products.id", id)
      .update({
        title,
        price,
        quantity
      })

    return response.json({ msg: "Successfully update" });
  }

  async create(request: Request, response: Response) {
    const {
      title,
      price,
      quantity,
    } = request.body;

    const trx = await knex.transaction();

    const product = {
      title,
      price,
      quantity
    };

    const insertedIds = await trx("products").insert(product);

    const product_id = insertedIds[0];

    await trx.commit();

    return response.json({
      id: product_id,
      ...product,
    });
  }
  
  async delete(request: Request, response: Response) {
    const id = request.params.id;

    const product = await knex("products").where("id", id).delete();

    if (!product) {
      return response.status(400).json({ message: "Product not found." });
    }


    return response.json({ msg: "Successfully deleted" });
  }
}

export default ProductsController;