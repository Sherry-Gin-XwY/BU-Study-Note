const currentCustomerOrderDB = require('../../DB/currentCustomerOrderDB');
const CurrentCustomerOrder = currentCustomerOrderDB.getModel();

module.exports = async (req, res, next) => {
    // Fill in the code

    var id = req.body.customerId;

    var customerShopCart = new CurrentCustomerOrder({

        customerId: req.body.customerId,
        shopId: req.body.shopId,
        shopName: req.body.shopName,
        customerAmount: req.body.customerAmount,
        perPrice: req.body.price,
        totalPrice: (req.body.customerAmount * req.body.price)
    });

    customerShopCart.save(function (err) {
        if(err)
            console.log("Error : %s ", err);
            res.redirect("/customerShopPage/"+req.body.customerId);
    })
}