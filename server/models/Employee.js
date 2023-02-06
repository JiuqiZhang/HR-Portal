const mongoose = require("mongoose")

const schema = mongoose.Schema({
    Name: {type:String, required: true},
	email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    
})
module.exports = mongoose.model("Employee", schema)