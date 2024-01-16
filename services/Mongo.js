const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const MONGO_URL_USERS = process.env.MONGO_URL_USERS

mongoose.connection.once("open" , ()=>{
        console.log("Database connected")
    })
      
    mongoose.connection.on("error" ,()=>{
        console.warn("Database connection error!!")
    })

async function mongoConnectUserDB()
{
    await mongoose.connect(MONGO_URL_USERS )
}

async function mongoDisconnect()
{
    await mongoose.disconnect()
}


module.exports ={
    mongoConnectUserDB,
    mongoDisconnect
}