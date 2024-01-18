import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import router from "./src/routes/productRouter.js"

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()
const port = process.env.PORT
const password = process.env.PASSWORD
const url = process.env.URL.replace("<password>",password)

app.use("/api/food",router)

mongoose.connect(url).then(res=>console.log("DB connected")).catch(err=>console.log("DB Error"))

app.listen(port,()=>{
    console.log("Server Connected");
})
