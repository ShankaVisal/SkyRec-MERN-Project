import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique : true
    },
    description : {
        type: String,
        required: true
    },
    price : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const Category = mongoose.model("category",categorySchema)

export default Category