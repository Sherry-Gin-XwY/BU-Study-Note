const shopDB = require('../../DB/shopDB.js');
const Shop = shopDB.getModel();

module.exports = async (req, res, next) => {

    // TODO: Fill in the code
    var id = req.body.id;

    Shop.findById(id, function(err, shop){

        if (err)
            console.log("Error Selecting: %s ", err);
        if (!shop)
            return res.render('404');

            shop.shopName = req.body.shopName;
            shop.amount = req.body.amount;
            shop.price = req.body.price;

            shop.save(function (err) {
                if (err)
                    console.log("Error updating shop: %s ", err);
                res.redirect('/shops');
            });
    });
};