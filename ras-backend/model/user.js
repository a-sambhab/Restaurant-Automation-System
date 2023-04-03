const mongoose = require("mongoose")

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    emp_id: {
        type: String,
        required: true,
    },
    loggedin: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model("User", User);