const express = require('express')
const router = express.Router()
const stateController = require('../controllers/stateController')
const spotController = require('../controllers/spotController')

// state routes----------------------
// ---------------------------------
router.get("/", stateController.index)
router.get("/:id", stateController.show)

// -----------spot routes------------------
router.get('/:id/spots', spotController.index)
router.post('/:id/spots', spotController.create)
router.get('/:id/spots/new', spotController.new)
router.get('/:id/:SpotId', spotController.show)
router.get('/:id/:SpotId/edit', spotController.edit)
router.patch('/:id/:SpotId', spotController.update)
router.delete('/:id/:SpotId', spotController.delete)

// router.get('/:id/comments', commentController.index)
// router.get('/:id/comments/new', commentController.new)
// router.post('/:id/comments', commentController.create)
// router.get('/:id/comments/:commentId', commentController.show)
// router.get('/:id/comments/:commentId/edit', commentController.edit)
// router.patch('/:id/comments/:commentId', commentController.update)
// router.delete('/:id/comments/:commentId', commentController.delete)

module.exports = router 