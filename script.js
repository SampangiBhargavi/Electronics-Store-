
// =====================================================
// ELECTROMART COMMON JAVASCRIPT
// =====================================================


// =====================================================
// GET CART
// =====================================================

function getCart() {

    return JSON.parse(
        localStorage.getItem("electroMartCart")
    ) || [];

}


// =====================================================
// SAVE CART
// =====================================================

function saveCart(cart) {

    localStorage.setItem(
        "electroMartCart",
        JSON.stringify(cart)
    );

}


// =====================================================
// GET WISHLIST
// =====================================================

function getWishlist() {

    return JSON.parse(
        localStorage.getItem("electroMartWishlist")
    ) || [];

}


// =====================================================
// SAVE WISHLIST
// =====================================================

function saveWishlist(wishlist) {

    localStorage.setItem(
        "electroMartWishlist",
        JSON.stringify(wishlist)
    );

}


// =====================================================
// ADD TO CART
// =====================================================

function addToCart(productId) {

    let cart = getCart();


    const existingProduct = cart.find(

        item => Number(item.id) === Number(productId)

    );


    if (existingProduct) {

        if (existingProduct.quantity < 10) {

            existingProduct.quantity++;

        } else {

            alert("Maximum quantity is 10.");

            return;

        }

    } else {

        cart.push({

            id: Number(productId),

            quantity: 1

        });

    }


    saveCart(cart);


    updateCartCount();


    alert("Product added to cart!");

}


// =====================================================
// ADD TO WISHLIST
// =====================================================

function addToWishlist(productId) {

    let wishlist = getWishlist();


    const exists = wishlist.some(

        id => Number(id) === Number(productId)

    );


    if (exists) {

        alert("Product is already in your wishlist.");

        return;

    }


    wishlist.push(Number(productId));


    saveWishlist(wishlist);


    updateWishlistCount();


    alert("Product added to wishlist!");

}


// =====================================================
// REMOVE FROM WISHLIST
// =====================================================

function removeFromWishlist(productId) {

    let wishlist = getWishlist();


    wishlist = wishlist.filter(

        id => Number(id) !== Number(productId)

    );


    saveWishlist(wishlist);


    updateWishlistCount();

}


// =====================================================
// CART COUNT
// =====================================================

function updateCartCount() {

    const cart = getCart();


    let totalItems = 0;


    cart.forEach(item => {

        totalItems += Number(item.quantity);

    });


    const cartCount =
        document.getElementById("cartCount");


    if (cartCount) {

        cartCount.innerText = totalItems;

    }

}


// =====================================================
// WISHLIST COUNT
// =====================================================

function updateWishlistCount() {

    const wishlist = getWishlist();


    const wishlistCount =
        document.getElementById("wishlistCount");


    if (wishlistCount) {

        wishlistCount.innerText =
            wishlist.length;

    }

}


// =====================================================
// GET PRODUCT
// =====================================================

function getStoreProduct(productId) {

    const storedProducts = JSON.parse(

        localStorage.getItem("electroMartProducts")

    );


    const productList =
        storedProducts || products;


    return productList.find(

        product =>
            Number(product.id) === Number(productId)

    );

}


// =====================================================
// FORMAT PRICE
// =====================================================

function formatPrice(price) {

    return "₹" +
        Number(price).toLocaleString("en-IN");

}


// =====================================================
// SEARCH PRODUCT
// =====================================================

function searchStoreProducts(searchText) {

    const storedProducts = JSON.parse(

        localStorage.getItem("electroMartProducts")

    );


    const productList =
        storedProducts || products;


    const search =
        searchText.toLowerCase().trim();


    return productList.filter(product =>

        product.name.toLowerCase().includes(search) ||

        product.brand.toLowerCase().includes(search) ||

        product.category.toLowerCase().includes(search)

    );

}


// =====================================================
// UPDATE NAVBAR COUNTS
// =====================================================

function updateNavbarCounts() {

    updateCartCount();

    updateWishlistCount();

}


// =====================================================
// RUN WHEN PAGE LOADS
// =====================================================

document.addEventListener(

    "DOMContentLoaded",

    function () {

        updateNavbarCounts();

    }

);

