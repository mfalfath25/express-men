var router = require('express').Router()

/* GET error page. */
router.get('/', (req, res, next) => {
  res.render('error', { title: 'Error' })
})

module.exports = router
