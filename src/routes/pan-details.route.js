const express = require('express')
const router = express.Router()

const PanDetalsController = require('../controllers/pan-details.controller')

//Get Pandetails by id
router.get('/:id', PanDetalsController.PanDetailsById)



module.exports = router;