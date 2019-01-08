const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Media = new Schema({
    url: String,
    postedBy: String
   
})

module.exports = mongoose.model("Media", Media)