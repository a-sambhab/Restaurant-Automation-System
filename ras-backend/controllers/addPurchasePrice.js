const Purchases =  require("../model/purchases");

const addPurchasePrice = async (req,res) => {
    const purchase = await Purchases.findOne({purchaseId: req.body.purchaseid});
    purchase.totalInvoice = req.body.invoice;
    const changed = await purchase.save();
    res.send(changed);
}

module.exports = addPurchasePrice;