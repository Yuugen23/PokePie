const userModel = require('../../model/user/user.model')

async function getApiKey(req,res)
{
    const userData = req.body
    const msg =await userModel.generateKey(userData)
    res.json(msg)
    // res.send("OK")
}

async function getValidated(req,res)
{
    const userData = req.body
    if(await userModel.validate(userData))
    {
        res.send("User is validated!!")
    }
    else
    {
        res.send("User not validated!!")
    }
}



function getValidationStatus(req,res)
{
    res.send(userModel.checkValidation(req))
}

function getRequestToValidate(req,res)
{
    res.send("Please Validate first to use our API")
}

module.exports = {
    getApiKey,
    getValidated,
    getValidationStatus,
    getRequestToValidate
}