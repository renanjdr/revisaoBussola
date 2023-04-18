import { model, Schema } from "mongoose"


const productSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    quantity: {
        require: true,
        type: Number
    },
    price: {
        require: true,
        type: Number
    }

},{
    timestamps: true
})

export default model("products", productSchema)