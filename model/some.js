const mongoose = require('mongoose')

const tosaySchema = new mongoose.Schema({
    content : {
        type: String,
        default: "썅"
    }
})

const Tosay = mongoose.model("Tosay", tosaySchema)

module.exports = {Tosay}