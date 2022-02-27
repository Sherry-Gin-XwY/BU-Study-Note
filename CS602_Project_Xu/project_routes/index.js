var express = require('express');
var router = express.Router();

// other modules

// shop modules (定义shop的router)
var addShop                 = require("./manageShop/2addShop");                    // 1addShop.js
var deleteShop              = require("./manageShop/6deleteShop");                 // 1deleteShop.js
var deleteShopAfterConfirm  = require("./manageShop/7deleteShopAfterConfirm");     // 1deleteShopAfterConfirm.js
var displayShop             = require("./manageShop/1displayShop");                // 1displayShop.js
var editShop                = require("./manageShop/4editShop");                   // 1editShop.js
var saveShop 			          = require("./manageShop/3saveShop");                   // 1saveShop.js
var saveShopAfterEdit       = require("./manageShop/5saveShopAfterEdit");          // 1saveShopAfterEdit.js


// router specs

// router specs (控制每个网站的去向)
router.get('/', function(req, res, next) {
  res.redirect('/shops');
});

////////////////////////////////////////////////////////////////////////////
// manage shops

// manage to display shop
router.get('/shops',           displayShop);
// manage to add shop
router.get('/shops/manageShopAdd',        addShop);
router.post('/shops/manageShopAdd', 			saveShop);
// manage to edit shop
router.get('/shops/manageShopEdit/:id',    editShop);
router.post('/shops/manageShopEdit/',      saveShopAfterEdit);
// manage to delete shop
router.get('/shops/manageShopDelete/:id',    deleteShop);
router.post('/shops/manageShopDelete',        deleteShopAfterConfirm);

module.exports = router;
