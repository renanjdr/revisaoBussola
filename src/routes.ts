import { Router } from "express"
import productController from "./products/product.controller"

const routes =  Router()

// CRUD Products
routes.post("/products",productController.create)
routes.get("/products",productController.list)
routes.get("/products/:id",productController.find) 
routes.put("/products/:id",productController.update) 
routes.delete("/products/:id",productController.delete) 

export default routes