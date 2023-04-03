const Sales = require("../model/sales");

const addSale = async (req,res) => {
    const newSale = new Sales({
        tableNumber: req.body.tableNumber,
        content: req.body.orders,
        totalBill: req.body.totalBill,
    })
    newSale.salesID = new Date();
    const newSalesave = await newSale.save();
    res.send(newSalesave);
    // console.log(newSalesave.date.getDate());
}

module.exports = addSale;