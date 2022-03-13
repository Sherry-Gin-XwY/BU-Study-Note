const currentCustomerOrderDB = require('../../DB/currentCustomerOrderDB');
const Cart = currentCustomerOrderDB.getModel();

// display shopping carts for Customer user

module.exports = async (req, res, next) => {

    // TODO: fill in the code
    let customerId = req.params.customerId;

    let Carts = await Cart.find(
        {customerId: customerId}
    );

    let result = Carts.map( emp => {
        return {
            id: emp._id,
            customerId: req.params.customerId,
            shopId: emp.shopId,
            shopName: emp.shopName,
            customerAmount: emp.customerAmount,
            perPrice: emp.perPrice,
            totalPrice: emp.totalPrice
        };
    });

    res.render('customerShopView/3customerDisplayShoppingCartView',
            {title: "List of Shops in shopping cart", data: result, customerId}
    );
};