var router = require('express').Router()
var functions = require('../../functions/index')

router.get('/index.css', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/index.css`)
})

module.exports = router