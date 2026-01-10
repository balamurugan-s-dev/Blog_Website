import dotenv from 'dotenv'
dotenv.config({quiet: true})

const env ={
    PORT: process.env.PORT || 4000,
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
    JWT_SECRET:process.env.JWT_SECRET,
    NODE_ENV:process.env.NODE_ENV,
}

if(!env.MONGO_URL) throw new Error('DB url is missing')
if(!env.JWT_SECRET) throw new Error('Secret Token is missing')

export default env