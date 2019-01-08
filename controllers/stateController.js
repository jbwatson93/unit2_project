State = require("../models/State")

const stateController = {
    index: (req,res) => {
        State.find({}).then(states => {
            res.render('state/index', { states })
        })
    },
    show: (req, res) => {
        const stateId = req.params.id
        State.findById(stateId).then((state) => {
          res.render('state/show', {state})
        })
}
}
module.exports = stateController