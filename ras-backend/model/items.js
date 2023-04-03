const mongoose = require("mongoose");

const Items = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Map,
        required: true,
    },
});

module.exports = mongoose.model('Items', Items);