const mongoose = require("mongoose");

const Purchases = new mongoose.Schema({
    purchaseId: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    content: {
        type: Object,
        required: true,
    },
    totalInvoice: {
        type: Number,
        default: 0,
    },
    Delivered: {
        type: Boolean,
        default: false,
    },
    Paid: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Purchases', Purchases);