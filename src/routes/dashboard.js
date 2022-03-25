var router = require('express').Router()
var car = require('../controllers/dashboard')
const setLayout = require('../middleware/setLayout')

router.use(setLayout('layouts/dashboard'))

router.get('/', car.getCarList)

module.exports = router
