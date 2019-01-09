const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema({
    author: String,
    content: String
});

module.exports = mongoose.model("Comment", Comment)