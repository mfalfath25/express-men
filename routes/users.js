var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

router.get('/cool', (req, res, next) => {
  res.send('hi this is sent by users route to users template')
})

module.exports = router
