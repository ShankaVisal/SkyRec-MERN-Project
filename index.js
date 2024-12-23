import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routes/userRoutes.js";
import mongoose from "mongoose";
import galleryItemRouter from "./routes/galleryItemRoute.js";
import jwt, { decode } from "jsonwebtoken";
import categoryRouter from "./routes/categoryRoute.js";
import dotenv from "dotenv";
import roomeRoute from "./routes/roomRoute.js";
import bookingRouter from "./routes/bookingRoute.js";
dotenv.config()

const app = express()

app.use(bodyParser.json())

const connectonString = process.env.MONGO_URL;
//console.log(connectonString)

mongoose.connect(connectonString).then(()=>{
    console.log("connected to the database")
}).catch(()=>{
    console.log("Failed to connect with the database")
})

app.use((req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if(token != null){
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
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
app.use('/api/rooms', roomeRoute)
app.use('/api/bookings', bookingRouter)



app.listen(5000, (req,res)=>{
    console.log("server is running on port 5000")
})