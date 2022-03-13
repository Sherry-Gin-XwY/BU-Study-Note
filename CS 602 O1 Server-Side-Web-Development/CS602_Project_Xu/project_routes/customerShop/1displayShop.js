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

    res.format({
        // JSON format
        'application/json': function() {
            res.json(result);
        },

        // xml format
        'application/xml': function() {
            let resultXml =
            '<?xml version="1.0"?>\n' +
            '<id="' + result.id + '">\n' +
            '<customerId>' + result.customerId + '</customerId>\n' +
            '<shopName>' + result.shopName + '</shopName>\n' +
            '<amount>' + result.amount + '</amount>\n' +
            '<price>' + result.price + '</price>\n' +
            '</id>\n';

            res.type('application/xml');
            res.send(resultXml);
        },


        'text/html':function() {
            res.render('customerShopView/1customerDisplayShopView',
                {title: "List of Shops", data: result, customerId});
    }

})

};