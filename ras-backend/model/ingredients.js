const mongoose = require("mongoose");

const Ingredients = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    threshold: {
        type: Number,
        default: 0,
    },
    currentusage: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('Ingredients', Ingredients);