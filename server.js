const express = require('express')
const http = require('http')
const session = require('express-session')
const dotenv = require('dotenv')

dotenv.config()
const SESSION_KEY = process.env.SESSION_KEY


const app = express()
const PORT = 3030

const server = http.createServer(app)

const mongo = require('./services/Mongo')

// ? import the Routers
const userRouter = require("./routes/user/user.router")
const pokemonRouter = require("./routes/pokemon/pokemon.router")

app.use(express.json());


app.use(session
({
    secret: SESSION_KEY, 
    resave: false,
    saveUninitialized: false,
}))

app.use('/user' , userRouter )

// app.use((req, res, next) => {
//     // Assuming that req.session.isLoggedIn is a boolean
//     if (req.session.isLoggedIn || req.originalUrl.startsWith('/user') ) {
//       // The session value is true, proceed with the API query
//       next();
//     } else {
//       if(req.originalUrl !== '/user/askToValidate' )
//       {
//         res.redirect('/user/askToValidate')
//       }
//       else
//       {
//         next()
//       }
//     }
// })

app.use('/pokemon' , pokemonRouter )

async function startServer() {

    try{
        await mongo.mongoConnectUserDB()
        server.listen( PORT ,()=>{
            console.log(`server is running on port ${PORT}.....`);
        })
    }catch(err){console.log(err)}
}

startServer()