const Ingredients = require('../model/ingredients');

const addIngredient = (req,res) => {
    const newIngredient =  new Ingredients({
        name: req.body.name,
        quantity: req.body.quantity
    });
    newIngredient.save().then(()=>{
        res.send(newIngredient);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = addIngredient;
