const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creater: { type: String, required: true },
    timestamp: { type: String, required: true},
    status: { type: String, required: true },
})

module.exports = mongoose.model("Report", schema)
