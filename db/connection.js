const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;