const shopDB = require('../../DB/shopDB.js');
const Shop = shopDB.getModel();

module.exports = async (req, res, next) => {

    // TODO: Fill in the code
    var id = req.params.id;
/*
    Shop.findById(id, function (err, shop) {
        if(err)
            console.log("Error Selecting : %s ", err);
        if(!shop)
            return res.render('404');
        res.render('manageShopView/3manageEditShopView',
            {
                title: "Edit Shop",
                data: {
                    id: shop.id,
                    shopName: shop.shopName,
                    amount: shop.amount,
                    price: shop.price
                }
            });
    }); */

    let result = await Shop.findById(id, function (err, shop) {
        return {
            id: shop.id,
            shopName: shop.shopName,
            amount: shop.amount,
            price: shop.price
        }
    });

    res.format({
        // JSON format
        'application.json': function() {
            res.json(result);
        },

        // xml format
        'application/xml' : function() {
            let resultXml =
            '<?xml version="1.0"?>\n' +
            '<id="' + result.id + '">\n' +
            '<shopName>' + result.shopName + '</shopName>\n' +
            '<amount>' + result.amount + '</amount>\n' +
            '<price>' + result.price + '</price>\n' +
            '</id>\n';

            res.type('application/xml');
            res.send(resultXml);
        },

        'text/html' :function() {
            res.render('manageShopView/3manageEditShopView', {
                title: "Edit Shop",
                data: {
                    id: result.id,
                    shopName: result.shopName,
                    amount: result.amount,
                    price: result.price
                }
            });
        }
    })
};