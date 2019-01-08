const express = require('express')
const router = express.Router()
const stateController = require('../controllers/stateController')
const spotController = require('../controllers/spotController')


router.get("/", stateController.index)
router.get("/:id", stateController.show)



router.get('/:id/spots', linkController.index)
router.post('/:id/spots', linkController.create)
router.get('/:id/spots/new', linkController.new)
router.get('/:id', linkController.show)
router.get('/:id/edit', linkController.edit)
router.patch('/:id', linkController.update)
router.delete('/:id', linkController.delete)

router.get('/:id/comments', commentController.index)
router.get('/:id/comments/new', commentController.new)
router.post('/:id/comments', commentController.create)
router.get('/:id/comments/:commentId', commentController.show)
router.get('/:id/comments/:commentId/edit', commentController.edit)
router.patch('/:id/comments/:commentId', commentController.update)
router.delete('/:id/comments/:commentId', commentController.delete)

module.exports = router