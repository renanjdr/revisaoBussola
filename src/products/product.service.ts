import { producType } from "./types/product.type"
import ProductModel from "./product.schema"

export class ProductService {

    constructor(){}

    async create(product: producType) {
        const createdProduct = await ProductModel.create(product)
        return createdProduct
    }

    async list() {
        const productList = await ProductModel.find()

        return productList
    }

    async find(id) {
        const foundProduct = await ProductModel.findById(id)

        return foundProduct
    }

    async update(id, productUpdate: producType) {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, productUpdate)

        return updatedProduct
    }

    async delete(id) {
        const deletedProduct = await ProductModel.findByIdAndDelete(id)

        return deletedProduct
    }

}
