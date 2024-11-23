import express from "express";
import { createCategory, GetCategory, deleteCategory, getCategoryByName, updateCategory } from "../controllers/categoryController.js";


const categoryRouter = express.Router();

categoryRouter.post('/', createCategory)

categoryRouter.get('/', GetCategory)

categoryRouter.delete('/:name', deleteCategory)

categoryRouter.get('/:name', getCategoryByName)

categoryRouter.put('/:name', updateCategory)

export default categoryRouter