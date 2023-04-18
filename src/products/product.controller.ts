import { ProductService } from "./product.service"
import { Request, Response } from "express"

class ProductController {
    
    async create(req: Request, res: Response) {
        const createdProduct =  await new ProductService().create(req.body)

        return res.status(201).json(createdProduct)
    }

    async list(req: Request, res: Response) {
        const productList = await new ProductService().list()
    
        return res.status(200).json(productList)
    }

    async find(req: Request, res: Response) {
        const product = await new ProductService().find(req.params.id)
    
        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const updatedProduct = await new ProductService().update(req.params.id, req.body)
    
        return res.status(200).json(updatedProduct)
    }

    async delete(req: Request, res: Response) {
        const deletedProduct = await new ProductService().delete(req.params.id)

        return res.status(200).json(deletedProduct)
    }
}

export default new ProductController()