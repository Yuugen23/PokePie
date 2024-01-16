const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    apiKey: {
      type: String,
      required: true,
      unique: true
    },
})

module.exports = mongoose.model('User', Schema)