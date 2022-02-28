// This page is working for the click action

// Manage shops

// add shop -> to the manage addShop page
function addShop() {
    window.location.href = '/shops/manageShopAdd';
}

// cancel add shop -> back to the manage shops page
function cancelAddShop() {
    window.location.href = '/shops';
}

// cancel delete shop -> back to the manage shops page
function cancelDeleteShop() {
    window.location.href = '/shops';
}

////////////////////////////////////////////////////////
// Homepage
function toTheRegister() {
    window.location.href = '/Register';
}

// Cancel Register -> back to the home page
function cancelRegister() {
    window.location.href = '/homepage';
}

// Cancel Add Shop to the cart
// TODO: need to identifi the id
function cancelAddShopToCart() {
    window.location.href = '/..';
}
