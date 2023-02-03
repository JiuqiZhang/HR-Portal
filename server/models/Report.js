const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId;

const schema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creater: { type: String, required: true },
    timestamp: { type: String, required: true},
    status: { type: String, required: true },
    comment:[{ type: refType, ref: "Comment" }]
})

module.exports = mongoose.model("Report", schema)
