const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Spot = new Schema({
    name: String,
    location: String,
    description: String,
    egm: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    media: [{
        type: Schema.Types.ObjectId,
        ref: 'Media'
    }]
})

module.exports = mongoose.model("Spot", Spot)