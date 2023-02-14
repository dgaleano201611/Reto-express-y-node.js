const express = require('express')
const router = express.Router()
const controller = require('../controllers/index.controller')

router.get('/course-top-25', controller.index)


module.exports = router