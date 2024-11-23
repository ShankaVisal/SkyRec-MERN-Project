import express from "express";
import { createBooking } from "../controllers/bookingConrroller.js";

const bookingRouter = express.Router();

bookingRouter.post('/',createBooking)

export default bookingRouter