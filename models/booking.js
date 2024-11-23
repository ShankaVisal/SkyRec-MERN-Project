import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    bookingId:{
        type: Number,
        required: true,
        unique: true
    },
    roomId:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        required: true,
        default: "Pending"
    },
    reason: {
        type: String,
        default: ""
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
        default: ""
    }
})

const Booking = mongoose.model("bookings",bookingSchema)

export default Booking