const currentCustomerOrderDB = require('../../DB/currentCustomerOrderDB');
const Cart = currentCustomerOrderDB.getModel();

// display shop in shopping carts for Customer user to edit

module.exports = async (req, res, next) => {

    // TODO: fill in the code

    var id = req.params.id;

    Cart.findById(id, function(err, shop) {
        if(err)
        console.log("Error Selecting : %s ", err);
    if(!shop)
        return res.render('404');
    res.render('customerShopView/4customerDisplayShoppingCartEditView',
        {
            title: "Edit Shops in shopping cart",
            data: {
                id: shop._id,
                customerId: shop.customerId,
                shopId: shop.shopId,
                shopName: shop.shopName,
                customerAmount: shop.customerAmount,
                perPrice: shop.perPrice,
                totalPrice: shop.totalPrice
            }
        })
    });
};