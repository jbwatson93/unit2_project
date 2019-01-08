Spot = require("../models/Spot")

const spotController = {
    index: (req, res) => {
        Spot.find({}).then(links => {
            res.render('spot/index', { links })
        })
    },
    new: (req, res) => {
        res.render("spot/new")
    },
    create: (req, res) => {
        console.log(req.body)
        Spot.create({
            name: req.body.name,
            link: req.body.link,
            content: req.body.content,
            img: req.body.img,
            createdAt: req.body.createdAt
        }).then(newLink => {
            res.redirect('/:id')
        })
    },
    show: (req, res) => {
      const SpotId = req.params.id
      Spot.findById(SpotId).then((Spot) => {
        console.log(Spot)
        res.render('spot/show', { Spot })
      })
    },
    edit: (req, res) => {
        const SpotId = req.params.id
        // console.log(SpotId)
        res.render('spot/edit', {SpotId})
    },
    update: (req, res) => {
        const SpotId = req.params.id
        console.log(req.body)
        Spot.findByIdAndUpdate(SpotId, req.body, {new: true}).then((Spot) => {
            res.redirect(`/${SpotId}`)
        })
    },
    delete: (req, res) => {
        const SpotId = req.params.id
        Spot.findByIdAndRemove(SpotId).then(() => {
            res.redirect('/')
        })
    }
}



module.exports = spotController