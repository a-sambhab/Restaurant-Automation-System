const Items = require('../model/items');
const Ingredients = require('../model/ingredients');

const issueIngredients = async (req,res) => {
    const items = req.body.content;
    const itemkeys = Object.keys(items);
    itemkeys.map(async(itemkey)=>{
        const iteminfo = await Items.findOne({code: itemkey});
        const ings = iteminfo.ingredients;
        for(let [key,value] of ings){
            const ingredient = await Ingredients.findOne({name: key});
            if(ingredient.quantity>=items[itemkey]*value){
                ingredient.quantity-=(items[itemkey]*value);
                ingredient.currentusage+=(items[itemkey]*value);
            }
            else{
                ingredient.currentusage+=(items[itemkey]*value);
                res.send({
                    "status": 201,
                    "message": "Not enough Ingredients. Issue Purchase Order",
                })
            }
            const save = await ingredient.save();
            
        }
    })
    res.send({
        "status": 200,
        "message": "Ingredients Issued",
    })
}

module.exports = issueIngredients;