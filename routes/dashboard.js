var router = require('express').Router()

/* GET dashboard page. */
router.get('/', (req, res, next) => {
  res.render('dashboard', {
    title: 'Dashboard',
    heading: 'DASHBOARD',
    subHeading: 'Dashboard',
  })
})

module.exports = router
