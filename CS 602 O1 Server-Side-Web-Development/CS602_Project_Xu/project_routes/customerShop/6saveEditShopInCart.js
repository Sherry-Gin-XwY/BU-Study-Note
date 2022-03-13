const currentCustomerOrderDB = require('../../DB/currentCustomerOrderDB');
const Cart = currentCustomerOrderDB.getModel();

//

module.exports = async = (req, res, next) => {
    var id = req.body.id;
    var customerId = req.body.customerId;

    Cart.findById(id, function(err, shop) {
        if(err)
            console.log("Error Selecting : %s ", err);
        if(!shop)
            return res.render('404');

            shop.customerAmount =req.body.customerAmount;

            shop.save(function (err) {
                if(err)
                    console.log("Error updating shop: %s ", err);
                res.redirect('/customerShopPage/shoppingCart/'+ customerId)
            })
    })
}