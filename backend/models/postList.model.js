const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postList = new Schema({
    text:{
        type: String,
        required: true,
    },
    personId: {
      type: String,
      required: true
    },
}, {
    timestamps: true
})

const User = mongoose.model('postList', postList)

module.exports = User