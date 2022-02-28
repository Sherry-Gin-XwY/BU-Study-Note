const shopDB = require ('../../DB/shopDB.js');
const Shop = shopDB.getModel();

// display Shops for Customer user

module.exports = async (req, res, next) => {

    //TODO: fill in the code
    let customerId = req.params.id;

    let shops = await Shop.find({});

    let result = shops.map( emp => {
        return {
            customerId: req.params.id,
            id: emp._id,
            shopName: emp.shopName,
            amount: emp.amount,
            price: emp.price

        };
    });

    res.render('customerShopView/1customerDisplayShopView',
            {title: "List of Shops", data: result, customerId});

};