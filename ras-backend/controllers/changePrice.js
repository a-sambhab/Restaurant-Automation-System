const Items = require('../model/items');

const changePrice = async(req,res) => {
    const docs = await Items.find({code: req.body.code});
    docs[0].price=req.body.newprice;
    const newdocs = await docs[0].save();
    res.send(newdocs);
}

module.exports = changePrice;