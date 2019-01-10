const Spot = require("../models/Spot")
const Media = require('../models/Media')
const Comment = require('../models/Comment')
const State = require('../models/State')

const mediaController = {

    new: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        res.render('media/new', { stateId: stateId, spotId: spotId })
    },
    create: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        Spot.findById(spotId)
            .then((spot) => {
                media.create(req.body)
                    .then((media) => {
                        spot.medias.push(media)
                        spot.save()
                        res.redirect(`/${stateId}/${spotId}`)
                    })
            })
    },
    delete: (req, res) => {
        const stateId = req.params.id
        const spotId = req.params.spotId
        const mediaId = req.params.mediaId
            console.log(mediaId)
        media.findByIdAndDelete(mediaId)
        .then(() => {
            res.redirect(`/${stateId}/${spotId}`)
        })
    }

}

module.exports = mediaController
