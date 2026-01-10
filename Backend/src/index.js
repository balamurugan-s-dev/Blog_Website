import env from './config/envConfig.js'
import app from './app.js'
import connectDB from './database/connectDB.js'

connectDB()
app.listen(env.PORT, ()=> {console.log(`Server is running on ${env.PORT}`)})