const shopDB = require('../../DB/shopDB.js');
const Shop = shopDB.getModel();

module.exports = async (req, res, next) => {

    // Fill in the code

    var shop = new Shop({
        shopName: req.body.sName,
        amount: req.body.sAmount,
    });

    shop.save(function (err) {
        if(err)
            console.log("Error : %s ", err);
            res.redirect('/shops');
    });
};