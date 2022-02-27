const shopDB = require('../../DB/shopDB.js');
const Shop = shopDB.getModel();

module.exports = async (req, res, next) => {

    // TODO: Fill in the code
    var id = req.params.id;

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
                }
            });
    });
};