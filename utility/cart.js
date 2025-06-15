let productContainer = document.querySelector(".food-slid");
let productCon = document.querySelector(".foodcon");
const alcoholContainer = document.querySelector(".food-slid1");
const drinkContainer = document.querySelector(".food-slid2");
const OilSaucesContainer = document.querySelector(".food-slid3");
const foodStore = document.querySelector(".food-flex")
let cartItemElement = document.querySelector(".pro-wallattopup");
const cartorder = document.querySelector(".cartorder");
const subtotal = document.querySelector(".cartamount");
const totalcartitem = document.querySelector(".totalcartitem");
const totalCartDashboard = document.querySelector(".signalcount");
const addCartBTn = document.querySelector(".addBTn");


if(!productContainer) productContainer =  document.querySelector(".food-flex");
if(productContainer) productContainer > 8;

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
console.log(cart);
updateCart()

let products = null;
fetch('../product.json')
.then(response => response.json())
.then(data => {
    products = data;
    showProduct();
    showItemDetails();
})

// find the product
function showProduct(){
products.forEach((product, item) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink}<img src="${product.imgSrc}" class="itemImgbig" ></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">$${product.price}</label>
                    <label for="text" class="price1">instock ${product.instock}</label>
                </div>
                <div class="btn" onclick="addToCart()">
                    <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
                    <div class="product-count" id="product-count">
                        <button class="product-cartcount" onclick="changeNumberOfUnite('minus',${item.id})">-</button>
                        <label for="text" class="product-counttxt">${item.numberOfUnits}</label>
                        <button class="product-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    productContainer.appendChild(productDiv)

   
})
products.forEach((product) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink}<img src="${product.imgSrc}" class="itemImgbig" ></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">$${product.price}</label>
                    <label for="text" class="price1">instock ${product.instock}</label>
                </div>
                <div class="btn">
                    <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
    alcoholContainer.appendChild(productDiv)
})
products.forEach((product) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink}<img src="${product.imgSrc}" class="itemImgbig" ></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">$${product.price}</label>
                    <label for="text" class="price1">instock ${product.instock}</label>
                </div>
                <div class="btn">
                    <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
    drinkContainer.appendChild(productDiv)
})
products.forEach((product) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink}<img src="${product.imgSrc}" class="itemImgbig" ></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">$${product.price}</label>
                    <label for="text" class="price1">instock ${product.instock}</label>
                </div>
                <div class="btn">
                    <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
    OilSaucesContainer.appendChild(productDiv)
})

}


//add to cart

function addToCart(id) {
    //check product already exist in cart
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnite("plus", id)
    }else{
        const item = products.find((product) => product.id === id)
        cart.push({
            ...item,
            numberOfUnits: 1,
        })
    }
    updateCart();

    document.getElementById("cart").style.display = "none"
    document.getElementById("product-count").style.display = "flex"
}
showProduct()

//update cart
function updateCart() {
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem("CART")) || [];
    renderSubTotal();
    renderCartItem();
}

// calculate subtotal
function renderSubTotal(){
    let totalPrice = 0;
    let totalItem = 0;

    cart.forEach((item) => {
        totalPrice  += item.price * item.numberOfUnits
        totalItem  += item.numberOfUnits;
    });
    console.log(totalItem);

    subtotal.innerHTML = `$${totalPrice.toFixed(2)} `
    totalcartitem.innerHTML =  `(${totalItem} item)`
    totalCartDashboard.innerHTML =  `${totalItem}`
}

// render cart item
function renderCartItem(){
    cartItemElement.innerHTML = ""; 
    cart.forEach((item) => {
        cartItemElement.innerHTML += `
    <div class="pro-wallattopup">
        <div class="wallat-con">
            <div class="pro-btn-show">
                <div class="pro-wallatimg">
                    <a href="../dashboard/item.html?id=${item.id}">
                        <img src="${item.imgSrc}" class="topupImg">
                    </a>
                </div>
                <div class="Amount">
                    <a href="../dashboard/item.html?id=${item.id}">
                        <label for="text" class="cart-item-title">${item.name}</label>
                        <label for="text" class="cart-price">$${item.price}</label>
                    </a>
                </div>
                <div class="pro-count">
                    <button class="pro-cartcount" onclick="changeNumberOfUnite('minus',${item.id})">-</button>
                    <label for="text" class="pro-counttxt">${item.numberOfUnits}</label>
                    <button class="pro-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                </div>
                <div class="pro-counting">
                    <button class="remove" onclick="removeCartItem(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    </div>
    `;
})
}

// remov item from cart
function removeCartItem(id){
    cart = cart.filter((item) => item.id !== id)
    updateCart()
}

// change number of unite
function changeNumberOfUnite(action, id){

    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits 
        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits-- 
            }else if(action === "plus" && numberOfUnits <= item.instock){
                numberOfUnits++
            }
        }
        console.log('hree',cart);
        return{
            ...item,
            numberOfUnits
        }
    });
    updateCart()
    
}

