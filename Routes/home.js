const express = require('express')
let router = express.Router()
const homeController = require('../Controller/homeController')

router.get('/', homeController.getNames)

module.exports = router;