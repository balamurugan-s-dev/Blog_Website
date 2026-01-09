import mongoose from "mongoose";
import env from '../config.js'

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Database is connected')
        })
        await mongoose.connect(`${env.MONGO_URL}/${env.DB_NAME}`) 
    } catch (error) {
        console.log('Database error')
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB