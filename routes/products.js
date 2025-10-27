import express from "express";
import { getGenres, getProducts } from "../controllers/productsControllers.js";
export const productRouter = express.Router();
productRouter.get("/", getProducts);
productRouter.get("/genres", getGenres);
