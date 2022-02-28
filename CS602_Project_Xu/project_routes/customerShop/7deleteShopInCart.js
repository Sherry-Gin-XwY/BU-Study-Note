const currentCustomerOrderDB = require('../../DB/currentCustomerOrderDB');
const Cart = currentCustomerOrderDB.getModel();

module.exports = async (req, res, next) => {
    var id = req.params.id;

    Cart.findById(id, function (err, shop) {
        if(err)
            console.log("Error Selecting : %s, err");
        if (!shop)
            return res.render('404');
        res.render('customerShopView/5customerDeleteShopInCartView', {
            title: "Delete this shop in shopping cart",
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
    })
}