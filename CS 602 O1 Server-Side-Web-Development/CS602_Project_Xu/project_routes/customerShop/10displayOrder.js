const orderDB = require('../../DB/allCustomerOrderDB');
const Order = orderDB.getModel();

module.exports = async (req, res, next) => {

    let customerId = req.params.customerId;

    let Orders = await Order.find({
        customerId: customerId
    });

    let result = Orders.map( emp => {
        return  {
            orderId: emp.id,
            customerId: emp.customerId,
            shops: [
                {
                id: emp.shops._id,
                shopId: emp.shops.shopId,
                shopName: emp.shops.shopName,
                customerAmount: emp.shops.customerAmount,
                perPrice: emp.shops.perPrice,
                totalPrice: emp.shops.totalPrice
            }
        ]
        }
    });

    res.render('customerShopView/6customerDisplayOrder',
    {title: "List of Order", data: result, customerId});
}