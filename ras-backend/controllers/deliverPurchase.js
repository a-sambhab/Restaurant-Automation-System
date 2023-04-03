const Purchases =  require("../model/purchases");
const Ingredients = require("../model/ingredients")

const DeliverPurchase = async (req,res) => {
    const purchase = await Purchases.findOne({purchaseId: req.body.purchaseid});
    const purchasekeys = Object.keys(purchase.content);
    // console.log(purchase);
    purchasekeys.map(async(purchasekey)=>{
        const ingredient = await Ingredients.findOne({name: purchasekey});
        ingredient.quantity+=purchase.content[purchasekey]
        const saveing = await ingredient.save();
    })
    purchase.Delivered=true;
    purchase.Paid=true;
    const closepurchase = await purchase.save();
    res.send(closepurchase);
    // console.log(purchase.content);
    // const changed = await purchase.save();
    // res.send(changed);
}

module.exports = DeliverPurchase;