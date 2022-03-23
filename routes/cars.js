var router = require('express').Router()
const middleware = require('../middleware/addCar')

/* GET cars listing page. */
router.get('/', (req, res, next) => {
  res.render('cars', {
    title: 'Cars-list',
    heading: 'Cars',
    subHeading: 'List-car',
  })
})

/* GET add car page. */
router.get('/add', (req, res, next) => {
  res.render('addCar', {
    title: 'Cars-add',
    heading: 'Cars',
    subHeading: 'List-car',
  })
})

/* GET delete car page. */
router.get('/delete', (req, res, next) => {
  res.render('deleteCar', {
    title: 'Cars-delete',
    heading: 'Cars',
    subHeading: 'List-car',
  })
})

// router.get('/', middleware.addcarGet)
// router.post('/', middleware.addcarPost)

module.exports = router
