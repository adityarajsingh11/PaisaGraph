import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true,
        //lowercase: true,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long']
    },
    email:{
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
        trim: true,
        minlength: [3, 'Email must be at least 13 characters long']
    },
    password:{
        type: String, 
        required: true
        
    }


})

const User = mongoose.model('User', userSchema)

export default User;