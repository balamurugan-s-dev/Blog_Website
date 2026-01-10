import model from "../database/userSchema.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import env from "../config/envConfig.js"

export const register = async (req, res) => {
    const {username, email, password} = req.body

    try {
        if(!username || !email || !password) {
            return res.status(400).json({message: "All the fields are require !"})
        }

        if(username.length < 6){
            return res.status(400).json({message: "Username must be atleast 6 character"})
        }

        if(password.length < 8 ){
            return res.status(400).json({message: "Password must be atleast 8 character"})
        }

        const userexit = await model.findOne({email})
        if(userexit){
            return res.status(409).json({message: "User already exist use different email"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedpass = await bcrypt.hash(password, salt)

        const user = await model({name: username, email, password: hashedpass})
        await user.save()

        const token = jwt.sign({id: user._id}, env.JWT_SECRET, {expiresIn: "7d"})

        res.cookie('token', token,{
            httpOnly:true,
            secure:env.NODE_ENV === 'production',
            sameSite:env.NODE_ENV === 'production' ? 'none': 'strict',
            maxAge:7* 24* 60* 60* 1000,
        })

        return res.status(201).json({status:true, message:"User registration Successfull"})
  
    } catch (error) {
        return res.status(500).json({status:false, message:error.message})
    }
}


export const login = async(req, res) => {
    const {email, password} = req.body

    try {
        if(!email || !password){
            return res.status(400).json({message: "All the fields are require !"})
        }

        const userexit = await model.findOne({email})
        if(!userexit){
            return res.status(400).json({message: "Invalid credentials"})
        }

        const isMatch = await bcrypt.compare(password, userexit.password)
        if(!isMatch){
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({id : userexit._id}, env.JWT_SECRET, {
            expiresIn: "7d",
        })

        res.cookie("token", token, {
            httpOnly:true,
            secure:env.NODE_ENV === 'production',
            sameSite:env.NODE_ENV === 'production' ? 'none': 'strict',
            maxAge:7* 24* 60* 60* 1000,
        })

        return res.status(200).json({status: true, message: "User login Successfully !"})
    } catch (error) {
        return res.status(500).json({status:false, message:error.message})
    }
}

export const logout = async(req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secret: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none': 'strict',
        });

        return res.json({success: true, message: "Successfully Logged Out"});
    } catch (error) {
        return res.status(500).json({status:false, message:error.message})
    }
}