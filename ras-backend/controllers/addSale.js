const items = require("../model/items");
const Sales = require("../model/sales");

const addSale = async (req,res) => {
    const newSale = new Sales({
        tableNumber: req.body.tableNumber,
        content: req.body.orders,
        totalBill: req.body.totalBill,
        salesID: new Date(),
    })
    const newsalesave = await newSale.save();
    res.send(newsalesave);
    // console.log(newSalesave.date.getDate());
}

module.exports = addSale;