const Items = require('../model/items')

const addItems = (req,res) => {
    const newItem = new Items({
        name: req.body.name,
        code: req.body.code,
        price: req.body.price,
        description: req.body.description,
        ingredients: req.body.ingredients,
    })
    newItem.save().then(()=>{
        res.send(newItem);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = addItems;