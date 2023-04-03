const router = require('express').Router();
const addIngredient = require('../controllers/addIngredient');
const addItems = require('../controllers/addItems');
const addPurchasePrice = require('../controllers/addPurchasePrice');
const addSale = require('../controllers/addSale');
const changePrice = require('../controllers/changePrice');
const DeliverPurchase = require('../controllers/deliverPurchase');
const generatePurchaseOrder = require('../controllers/generatePurchaseOrder');
const getIngredients = require('../controllers/getIngredients');
const getItems = require('../controllers/getItems');
const getPurchases = require('../controllers/getPurchases');
const getSales = require('../controllers/getSales');
const issueIngredients = require('../controllers/issueIngredients');
const setThreshold = require('../controllers/setThreshold');

router.get('/getingredients', getIngredients);
router.post('/addingredient', addIngredient);
router.post('/additems', addItems);
router.get('/getitems', getItems);
router.put('/changeprice', changePrice);
router.put('/issueingredients', issueIngredients)
router.post('/addsale', addSale);
router.get('/getsales', getSales);
router.put('/setthreshold', setThreshold);
router.post('/generatepurchase', generatePurchaseOrder);
router.put('/addpurchaseprice', addPurchasePrice);
router.put('/deliverpurchase', DeliverPurchase);
router.get('/getpurchases', getPurchases);
module.exports = router;