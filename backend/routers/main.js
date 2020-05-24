const router = require('express').Router()

router.route('/').get((req, res)=>{
    let Users = require('../models/user.model')

    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(e => res.status(400).json(e))
})

module.exports = router