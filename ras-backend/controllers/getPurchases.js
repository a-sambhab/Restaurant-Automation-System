const Purchases = require('../model/purchases')

const getPurchases = async (req,res) => {
    const purchases = await Purchases.find({});
    res.send(purchases);
}

module.exports = getPurchases;