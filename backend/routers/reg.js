const router = require('express').Router()
const md5 = require('md5')
let Users = require('../models/user.model')

router.route('/').post((req, res)=>{
    const username = req.body.username
    const password = req.body.password

    const newUser = new Users({
        username: username,
        password: password,
        idPost: md5((username+password).toString())
    })

    newUser.save()
        .then(()=> res.json('User name'))
        .catch(e => res.status(200).json(e))
})

module.exports = router