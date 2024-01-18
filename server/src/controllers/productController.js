import productModel from "../models/productModel.js";

const productActions = {
    getAll:async (req,res)=>{
        try {
            const allProdcuts = await productModel.find({})
            res.send(allProdcuts)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    getByID:async (req,res)=>{
        try {
            const findByID = await productModel.findById(req.params.id)
            res.send(findByID)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    createNew:async (req,res)=>{
        try {
            const {name,ingredients,price} = req.body
            const newOne = new productModel({
                name:name,
                ingredients:ingredients,
                price:price
            })
            await newOne.save()
            res.send(newOne)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}

export default productActions