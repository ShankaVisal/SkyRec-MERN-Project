import express from "express";
import { createGalleryItem, GetGalleryItems } from "../controllers/galleryItemController.js";

const galleryItemRouter = express.Router();

galleryItemRouter.post("/",createGalleryItem)

galleryItemRouter.get('/',GetGalleryItems)

export default galleryItemRouter