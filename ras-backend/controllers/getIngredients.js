const Ingredients = require('../model/ingredients');

const getIngredients = (req,res) => {
    Ingredients.find().then((err,docs)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(docs);
        }
    })
}

module.exports = getIngredients;