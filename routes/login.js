var router = require('express').Router()
const auth = require('../middleware/auth')

/* GET login page. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'Login', statusCode: res.statusCode })
})

router.get('/', auth.loginGet)
router.post('/', auth.loginPost)

module.exports = router
