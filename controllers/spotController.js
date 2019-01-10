const Spot = require("../models/Spot")
const Media = require('../models/Media')
const Comment = require('../models/Comment')
const State = require('../models/State')
const spotController = {
    index: (req, res) => {
        Spot.find({}).then(links => {
            res.render('spot/index', { links })
        })
    },
    new: (req, res) => {
        const stateId = req.params.id
        res.render("spot/new", { stateId: stateId })
    },
    create: (req, res) => {
        // console.log(req.body)
        const stateId = req.params.id
        State.findById(stateId)
            .then((state) => {
                Spot.create(req.body)
                    .then((spot) => {
                        state.spots.push(spot)
                        state.save()
                        res.redirect(`/${stateId}`)
                    })
            })

    },
    show: (req, res) => {
        const spotId = req.params.spotId
        const stateId = req.params.id
        Spot.findById(spotId).populate('comments').populate('media').then((spot) => {
            // console.log(spot)
            const comments = spot.comments
            const media = spot.media
            res.render('spot/show', { spot: spot, spotId: spotId, stateId: stateId, comments: comments, media: media })
        })
    },
    edit: (req, res) => {
        const spotId = req.params.spotId
        const stateId = req.params.id
        // console.log(SpotId)
        res.render('spot/edit', { spotId: spotId, stateId: stateId })
    },
    update: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        // console.log(req.body)
        Spot.findByIdAndUpdate(spotId, req.body, { new: true }).then((spot) => {
            res.redirect(`/${stateId}`)
        })
    },
    delete: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        Spot.findByIdAndRemove(spotId).then(() => {
            res.redirect(`/${stateId}`)
        })
    }
}



module.exports = spotController