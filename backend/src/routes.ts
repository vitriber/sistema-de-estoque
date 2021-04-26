import express from "express";

import ProductsController from "./controllers/ProductsController";

const productsController = new ProductsController();

const routes = express.Router();

routes.post("/products", productsController.create);
routes.get("/products", productsController.index);
routes.get("/product/:id", productsController.indexOf);
routes.put("/product/:id", productsController.edit);
routes.delete("/product/:id", productsController.delete);

export default routes;