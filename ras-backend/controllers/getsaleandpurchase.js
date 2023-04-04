const Sales = require("../model/sales");
const Purchases = require("../model/purchases");
// const { default: sortByDate } = require("./sortByDate");
const sortByDate = (content,sdate,edate) => {
    const newdata = []
    content.map((entry)=>{
        if(entry.date>sdate&&entry.date<edate){
            newdata.push(entry);
        }
        // console.log(entry.date>cdate);
    })
    return newdata;
}

const getsaleandpurchase = async (req,res) => {
    const allsales = await Sales.find({});
    const allpurchases = await Purchases.find({});
    const datesales = sortByDate(allsales,new Date(req.body.sdate), new Date(req.body.edate));
    const datepurchases = sortByDate(allpurchases,new Date(req.body.sdate), new Date(req.body.edate));
    // console.log(datesales,datepurchases);
    res.send({
        "status": 200,
        "sales": datesales,
        "purchases": datepurchases,
    })
}

module.exports = getsaleandpurchase