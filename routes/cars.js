var router = require('express').Router()
var car = require('../controllers/cars')

router.get('/', car.getCarList)
router.get('/add', car.getAddCar)
router.post('/add', car.postAddCar)

module.exports = router
