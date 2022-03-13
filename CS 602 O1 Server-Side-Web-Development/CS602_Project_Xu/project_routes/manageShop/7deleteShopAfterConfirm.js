const shopDB = require('../../DB/shopDB.js');
const Shop = shopDB.getModel();

module.exports = async (req, res, next) => {

    // Fill in the code
    var id = req.body.id;

    Shop.findById(id, function (err, shop) {
        if(err)
            console.log("Error Selecting : %s ", err);
        if(!shop)
            return res.render(404);

        shop.remove(function (err) {
            if (err)
                console.log("Error deleting: %s ", err );
            res.redirect('/shops');
        });
    });
};