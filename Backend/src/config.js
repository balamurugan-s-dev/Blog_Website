import dotenv from 'dotenv'
dotenv.config({quiet: true})

const env ={
    PORT: process.env.PORT || 4000,
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME
}

if(!env.MONGO_URL) throw new Error('DB url is missing')

export default env