const Purchases = require("../model/purchases")
const Ingredients = require("../model/ingredients")

const generatePurchaseOrder = async(req,res) => {
    const ingredients = await Ingredients.find({});
    let order = {};
    ingredients.map(async(ingredient)=>{
        if(ingredient.quantity<ingredient.threshold){
            const orderquantity = ingredient.threshold-ingredient.quantity+1;
            order[ingredient.name] = Math.round(orderquantity*10)/10;
        }
    })
    const newPurchase = new Purchases({
        purchaseId: new Date(),
        content: order, 
    });
    const Purchaseadded = await newPurchase.save();
    res.send(Purchaseadded);
    // console.log(newPurchase);
}

module.exports = generatePurchaseOrder;