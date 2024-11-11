import mongoose from "mongoose";

const galleryItemSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required: true
        },
        image : {
            type : String,
            rrequired: true
        },
        description : {
            type : String,
            required: true
        }
    }
)

const GalleryItem = mongoose.model("galleryItems", galleryItemSchema)

export default GalleryItem