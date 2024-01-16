const crypto = require('crypto')
const User = require('./user.schema')
const mongoose = require('mongoose')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()


async function generateKey(userData)
{
    const key = crypto.randomUUID()
    const newUser ={
        email: userData.email,
        apiKey: key
    }

    return await checkAndInsert(newUser)
}

async function checkAndInsert(newUser)
{
    try{
        const existingData = await User.findOne( {email: newUser.email} )
        console.log(newUser)
        if(existingData)
        {
            return {
                msg: `Email ${newUser.email} is already logged in try using different email`,
                Success: false 
            }
        }
        else
        {
            await User.create(newUser)
            return{
                msg: `User ${newUser.email} is logged in`,
                Success: true , 
                email: newUser.email,
                apiKey: newUser.apiKey
            }
        }

    }catch(err)
    {
        console.log(err)
    }
}

async function validate(req,userData)
{
    const isThere = await User.findOne(userData)
    if(isThere)
    {
        req.session.isLoggedIn = true
        return true
    }
    else
    {
        return false
    }
}





function checkValidation(req) 
{
    return req.session.isLoggedIn === true
}

  


module.exports ={
    generateKey,
    validate,
    checkValidation
}