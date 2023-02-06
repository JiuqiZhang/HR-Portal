const mongoose = require("mongoose")

const schema = mongoose.Schema({
    beds:{ type: Number },
    tables:{ type: Number },
    mattresses: {type:Number},
    chairs:{ type: Number },
})

module.exports = mongoose.model("Facility", schema)