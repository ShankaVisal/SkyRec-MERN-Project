import Room from '../models/room.js'
import { isAdmin } from './userControllers.js'

export function createRoom(req,res){
    if(!req.user){
        res.status(401).json({
             message: "Please Login to create a room"
        })
        return
    }
    if(req.user.type !== "admin"){
        res.status(403).json({
            message: "You do not have a permission to create a room"
        })
        return
    }

    const newRoom = new Room(req.body)
    newRoom.save().then(
        ()=>{
            res.json({
                message: "Room is created sucessfully"
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message: "Room creation faild",
                error: err
            })
        }
    )

}

export function deleteRoom(req,res){
    if(!isAdmin(req)){
        res.status(403).json({
            message: "forbidden"
        })
        return
    }

    const roomId = req.params.roomId;
    Room.findOneAndDelete({roomID : roomId}).then(
        (result)=>{
            if(result==null){
                res.json({
                    message: " No rooms in this Room ID"
                })
            }else{
                res.json({
                    message: "Room deleted sucessfully",
                })
            }
        }
    ).catch(
        (err)=>{
            res.json({
                message: "Room deletion is failed",
                error: err
            })
        }
    )
}

export function findRooms(req,res){
    Room.find().then(
        (result)=>{

            if(result == null){
                res.json({
                    message: "No rooms in the Room ID"
                })
                return
            }else{
                res.json({
                    Rooms: result
                })
            }
        }
    ).catch(
        (err)=>{
            res.json({
                message: "couldn't get room details",
                error : err
            })
        }
    )
}

export function findRoomById(req,res){

    const roomId = req.params.roomId
    Room.findOne({roomID: roomId}).then(
        (result)=>{

            if(result == null){
                res.json({
                    message: "No rooms in the Room ID"
                })
                return
            }else{
                res.json({
                    message : "Room is found",
                    Rooms: result
                })
            }

        }
    ).catch(
        (err)=>{
            res.json({
                message: "couldn't get room details",
                error : err
            })
        }
    )
}

export function updateRoom(req, res){
    if(!isAdmin(req)){
        res.json({
            message: "forbidden"
        })
        return
    }

    const roomId = req.params.roomId
    Room.updateOne({roomID: roomId},req.body).then(
        ()=>{
            res.json({
                message:"update Room details successfuly"
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message: "faild to update Room details",
                error : err
            })
        }
    )
}

export function findRoomByCategory(req, res){
    const roomCategory = req.params.category

    Room.find({category: roomCategory}).then(
        (result)=>{
            if(result == null){
                res.json({
                    message: "No rooms in this Category"
                })
                return
            }else{
                res.json({
                    message : "Rooms found",
                    Rooms: result
                })
            }

        }
    ).catch(
        (err)=>{
            res.json({
                message: "couldn't get room details",
                error : err
            })
        }
    )
}
