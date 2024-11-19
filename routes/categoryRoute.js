import express from "express";
import { createCategory, GetCategory } from "../controllers/categoryController.js";


const categoryRouter = express.Router();

categoryRouter.post('/', createCategory)
categoryRouter.get('/', GetCategory)

export default categoryRouter