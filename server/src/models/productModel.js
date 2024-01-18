import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name:{type:String},
    ingredients:{type:String},
    price:{type:String}
})

export default mongoose.model("product",productModel) 