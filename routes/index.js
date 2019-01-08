const express = require('express')
const router = express.Router()
const linkController = require('../controllers/newslinks')
const commentController = require('../controllers/commentController')

router.get('/', linkController.index)
router.post('/', linkController.create)
router.get('/new', linkController.new)
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