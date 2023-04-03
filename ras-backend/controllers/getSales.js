const Sales = require("../model/sales");

const getSales = async (req,res) => {
    const docs = await Sales.find({});
    res.send(docs);
}

module.exports = getSales;