const Spot = require("../models/Spot")
const Media = require('../models/Media')
const Comment = require('../models/Comment')
const State = require('../models/State')

const commentController = {

    new: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        res.render('comment/new', { stateId: stateId, spotId: spotId })
    },
    create: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        Spot.findById(spotId)
            .then((spot) => {
                Comment.create(req.body)
                    .then((comment) => {
                        spot.comments.push(comment)
                        spot.save()
                        res.redirect(`/${stateId}/${spotId}`)
                    })
            })
    },
    delete: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        const commentId = req.params.commentId
            console.log(commentId)
        Comment.findByIdAndDelete(commentId)
        .then(() => {
            res.redirect(`/${stateId}/${spotId}`)
        })
    }

}

module.exports = commentController