var router = require('express').Router()

// main indexed route prefixes
router.get('/', (req, res) => {
  res.redirect('/login')
})

// request handler for every routes
router.use('/login', require('./login'))
router.use('/dashboard', require('./dashboard'))
router.use('/cars', require('./cars'))
// router.use('/cars/add', require('./cars'))
// router.use('/cars/delete', require('./cars'))

module.exports = router
