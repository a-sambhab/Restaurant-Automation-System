const Items = require('../model/items');

const getItems = (req,res) => {
    Items.find().then((err,docs)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(docs);
        }
    })
}

module.exports = getItems;