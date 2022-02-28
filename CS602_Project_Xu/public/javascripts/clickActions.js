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

// -> Carts
function viewChart(customerId) {
    window.location.href = '/customerShopPage/shoppingCart/'+customerId;
}

// -> Back to customer shop list
function backShopList(customerId) {
    window.location.href = '/customerShopPage/'+customerId;
}

// -> Cancel customer edit shop
function backShoppingCart(customerId) {
    window.location.href = '/customerShopPage/shoppingCart/'+customerId;
}

// Cancel Add Shop to the cart
function cancelAddShopToCart(customerId) {
    window.location.href = '/customerShopPage/'+customerId;
}

function logout() {
    window.location.href = '/';
}

function toManageUsers() {
    window.location.href = '/shops/manageUsers';
}