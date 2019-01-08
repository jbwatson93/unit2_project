const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const State = new Schema({
    name: String,
    spots: [{
        type: Schema.Types.ObjectId,
        ref: 'Spot'
    }]
})

module.exports = mongoose.model("State", State)