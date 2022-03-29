var router = require('express').Router()
var car = require('../controllers/cars')
const setLayout = require('../middleware/setLayout')

router.use(setLayout('layouts/cars'))

router.get('/', car.getCarList)
router.get('/add', car.getAddCar)
router.post('/add', car.postAddCar)
router.delete('/:id', car.deleteCar)
router.get('/edit/:id', car.getEditCar)
router.put('/edit/:id', car.putEditCar)
module.exports = router
