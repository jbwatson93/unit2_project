const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/skatespotfinder").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;