var router = require('express').Router()
const auth = require('../controllers/auth')
const setLayout = require('../middleware/setLayout')

// router.use(setLayout('login'))

router.get('/', auth.loginGet)
router.post('/', auth.loginPost)

module.exports = router
