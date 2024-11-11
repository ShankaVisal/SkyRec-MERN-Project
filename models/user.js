import mongoose from "mongoose";

const userSchema = mongoose.Schema({
     email:{
          type : String,
          required: true,
          unique : true
     },
     password : {
          type : String,
          required: true
     },
     firstName : {
          type : String,
          required: true
     },
     lastName : {
          type : String,
          required: true
     },
     type : {
          type : String,
          required: true,
          default : "customer"
     },
     whatsapp : {
          type : String,
          required: true
     },
     phone : {
          type : String,
          required: true
     },
     disabled : {
          type : Boolean,
          required: true,
          default : false
     },
     emailVerified : {
          type : Boolean,
          required: true,
          default : false
     }
})

const User = mongoose.model("users",userSchema)

export default User


// import mongoose from "mongoose"

// const userSchema = mongoose.Schema({
//     email: {
//          type : String,
//          required : true,
//          unique : true
//     },
//     firstName:{
//          type : String
//     },
//     llastName:{
//          type: String
//     },
//     img:{
//          type : String,
//          default : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
//     },
//     password:{
//          type: String,
//          required : true
//     },
//     phone: {
//          type : Number
//     }
// })

// const User = mongoose.model("users", userSchema)

// export default User
