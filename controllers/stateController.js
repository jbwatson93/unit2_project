State = require("../models/State")
Spot = require('../models/Spot')


const stateController = {
    index: (req,res) => {
        State.find({}).then(states => {
            res.render('state/index', { states })
        })
    },
    show: (req, res) => {
        const stateId = req.params.id
        State.findById(stateId).populate('spots').then((state) => {
            const spotId= req.params.id
         res.render('state/show',{state, stateId, spotId })
        })
}
}
module.exports = stateController