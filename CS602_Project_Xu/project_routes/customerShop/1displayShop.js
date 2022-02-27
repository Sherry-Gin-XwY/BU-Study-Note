const shopDB = require ('../../DB/shopDB.js');
const Shop = shopDB.getModel();

// display Shops for Customer user

module.exports = async (req, res, next) => {

    //TODO: fill in the code

    let shops = await Shop.find({});

    let result = shops.map( emp => {
        return {
            id: emp._id,
            shopName: emp.shopName,
            amount: emp.amount,
        };
    });

    res.render('customerShopView/1customerDisplayShopView',
            {title: "List of Shops", data: result});

};