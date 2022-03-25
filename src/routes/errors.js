var router = require('express').Router()

router.get('/', (req, res, next) => {
  res.render('error', { title: 'Error' })
})

module.exports = router
