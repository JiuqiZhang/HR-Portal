const mongoose = require("mongoose")

const schema = mongoose.Schema({
    firstName: { type:String, required: true },
    lastName: { type:String, required: true },
    phoneNum: { type:Number, required: true },
})

module.exports = mongoose.model("Roommate", schema)