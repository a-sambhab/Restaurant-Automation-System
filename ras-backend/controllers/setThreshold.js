const Ingredients = require("../model/ingredients");

const setThreshold = async(req,res)=>{
    const ingredients = await Ingredients.find({});
    ingredients.map(async(ingredient)=>{
        ingredient.threshold = (ingredient.threshold+ingredient.currentusage)/2;
        ingredient.currentusage=0;
        const newingredient = ingredient.save();
    })
    res.send({
        "status": 200,
        "message": "Threshold set successfully",
    })
}

module.exports = setThreshold;