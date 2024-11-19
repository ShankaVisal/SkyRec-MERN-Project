import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routes/userRoutes.js";
import mongoose from "mongoose";
import galleryItemRouter from "./routes/galleryItemRoute.js";
import jwt, { decode } from "jsonwebtoken";
import categoryRouter from "./routes/categoryRoute.js";

const app = express()

app.use(bodyParser.json())

const connectonString = "mongodb+srv://shanka:shanka@cluster0.70aoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectonString).then(()=>{
    console.log("connected to the database")
}).catch(()=>{
    console.log("Failed to connect with the database")
})

app.use((req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if(token != null){
        jwt.verify(token, "secretKeyofme", (err, decoded) => {
            if (decoded != null) {
                req.user = decoded
                next()
            }else{
                next()
            }
    

        });
    }else{
        next()
    }


});


app.use('/api/users', userRouter)
app.use('/api/gallery',galleryItemRouter)
app.use('/api/category', categoryRouter)



app.listen(5000, (req,res)=>{
    console.log("server is running on port 5000")
})