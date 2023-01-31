const mongoose = require("mongoose")

const schema = mongoose.Schema({
    address: { type:String, required: true },
    roommates: [{ type: refType, ref: "Roommate" }],
	reports: [{ type: refType, ref: "Report" }],
})

module.exports = mongoose.model("Housing", schema)
