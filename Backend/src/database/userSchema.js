import mongoose from "mongoose";

const bloguser = new mongoose.Schema({
    name : {
        type: String,
        require: true
    },
    
    email : {
        type:String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    verifyOtp: {
        type: String,
        default: '',
    },
    verifyOtpExpireAt: {
        type: Number,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetOTP: {
        type: String,
        default: '',
    },
    resetOTPExpireAt: {
        type: Number,
        default: 0,
    },
})

const model = mongoose.model("users", bloguser)

export default model