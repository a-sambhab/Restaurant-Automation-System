const mongoose = require("mongoose")

const Sales = new mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true,
    },
    salesID: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    content: {
        type: Map,
        required: true,
    },
    totalBill: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Sales', Sales);