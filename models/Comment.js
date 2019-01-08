const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comments = new Schema({
    author: String,
    content: String
});

module.exports = mongoose.model("Comments", Comments)