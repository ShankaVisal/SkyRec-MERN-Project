import express from "express";
import { createRoom, deleteRoom, findRoomByCategory, findRoomById, findRooms, updateRoom } from "../controllers/roomController.js";

const roomeRoute = express.Router();

roomeRoute.post('/',createRoom)
roomeRoute.get('/',findRooms)
roomeRoute.get('/by-category/:category',findRoomByCategory)
roomeRoute.get('/:roomId',findRoomById)
roomeRoute.delete('/:roomId',deleteRoom)
roomeRoute.put('/:roomId',updateRoom)

export default roomeRoute