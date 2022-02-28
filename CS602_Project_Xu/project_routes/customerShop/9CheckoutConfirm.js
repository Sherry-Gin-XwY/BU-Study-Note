const currentCustomerOrderDB = require('../../DB/currentCustomerOrderDB');
const Cart = currentCustomerOrderDB.getModel();
const allCustomerOrdersDB = require('../../DB/allCustomerOrderDB');
const Order = allCustomerOrdersDB.getModel();

module.exports = async (req, res, next) => {

    var customerId = req.params.customerId;

    let shops = await Cart.find(
        {customerId: customerId}
        );

    let result = shops.map( emp => {
        return {
            id: emp._id,
            shopId: emp.shopId,
            shopName: emp.shopName,
            customerAmount: emp.customerAmount,
            perPrice: emp.perPrice,
            totalPrice: emp.totalPrice
        }
    })

    var customerOrder = new Order ({
        customerId: req.params.customerId,
        shops: result
    });

    customerOrder.save(function (err) {
        if (err)
            console.log("Error: %s", err);
            res.redirect("/customerShopPage/"+req.params.customerId);

    });



};