const express = require('express')
const router = express.Router()

const PostcodeController = require('../controllers/post-code..controller')

//Get state city by Postcode
router.get('/:id', PostcodeController.StateCityById)



module.exports = router;