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

// router specs (控制每个网站的去向)

// 默认页面(default page)
router.get('/', function(req, res, next) {
  res.redirect('/homepage');
});

// （管理者）manage shops
// manage to display shop (定义mange管理shop的router)
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

// home Page modules (定义主页认证的router)
var displayHomePage = require("./homePage/1displayHomePage");
const { update, deleteUser } = require("./auth/auth");
var displayRegisterPage = require("./homePage/3displayRegister");
var login = require("./homePage/2login");
var register = require("./homePage/4register");

// (主页）homepage auth
// display home page
router.get('/homepage',         displayHomePage);
// register router
router.get('/register',         displayRegisterPage);
router.route("/register").post(register);
// login router
router.route("/homepage").post(login);
// Update router
router.route("/update").put(update);
// Delete router
router.route("/deleteUser").delete(deleteUser);

// 顾客（Customer）
// customer shops modules (定义customer的router)
var displayCustomerShops = require("./customerShop/1displayShop");

// customer shop auth
// display customer shops page
router.get('/customerShopPage/:id', displayCustomerShops);



module.exports = router;
