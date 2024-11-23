import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
        unique : true
    },
    price : {
        type : String,
        required : true
    },
    features : [
        {
            type : String
        }
    ],
    description : {
        type: String,
        required: true
    },

    image : {
        type : String,
    }
})

const Category = mongoose.model("category",categorySchema)

export default Category