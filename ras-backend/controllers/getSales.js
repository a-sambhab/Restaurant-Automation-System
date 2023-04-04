const Sales = require("../model/sales");

const getSales = async (req,res) => {
    const docs = await Sales.find({});
    console.log(docs);
    res.send(docs);
}

module.exports = getSales;