const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    phoneNum: { type: Number, required: true },
    email: { type: String, required: true },
})

module.exports = mongoose.model("Landlord", schema)