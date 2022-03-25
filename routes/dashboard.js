var router = require('express').Router()
var car = require('../controllers/dashboard')

router.get('/', car.getCarList)

/* GET dashboard page. */
// router.get('/', (req, res, next) => {
//   res.render('dashboard', {
//     title: 'Dashboard',
//     heading: 'DASHBOARD',
//     subHeading: 'Dashboard',
//   })
// })

module.exports = router
