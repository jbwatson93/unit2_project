const express = require('express')
const router = express.Router()
const stateController = require('../controllers/stateController')
const spotController = require('../controllers/spotController')
const commentController = require('../controllers/commentController')
const mediaController = require('../controllers/mediaController')


// state routes----------------------
// ---------------------------------
router.get("/", stateController.index)
router.get("/:id", stateController.show)

// -----------spot routes------------------
// router.get('/:id/spots', spotController.index)
router.post('/:id/spots', spotController.create)
router.get('/:id/spots/new', spotController.new)
router.get('/:id/:spotId', spotController.show)
router.get('/:id/:spotId/edit', spotController.edit)
router.patch('/:id/:spotId', spotController.update)
router.delete('/:id/:spotId', spotController.delete)

router.post('/:id/:spotId/comment', commentController.create)
router.get('/:id/:spotId/comment/new', commentController.new )
router.delete('/:id/:spotId/:commentId', commentController.delete)

module.exports = router 