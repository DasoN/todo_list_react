const router = require('express').Router()
let Users = require('../models/user.model')

router.route('/').post((req, res)=>{
    const username = req.body.username
    const password = req.body.password

    var c = 0
    Users.find()
        .then(users => {
            users.map(user =>{
                (user.username == username && user.password == password ) ? c++ : c
                //console.log(user.username +" is " + username + " : " + user.password + " is " + password)
            })
            if (c > 0) res.send('You are login in')
            if ( c <= 0) res.send('You arenot auth')
        })
        .catch(e => res.status(400).json(e))
})

module.exports = router