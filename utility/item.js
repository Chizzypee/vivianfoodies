let cart = JSON.parse(localStorage.getItem("CART")) || [];

let cartItemElement = document.querySelector(".pro-wallattopup");
const cartorder = document.querySelector(".cartorder");
const subtotal = document.querySelector(".cartamount");
const totalcartitem = document.querySelector(".totalcartitem");
const totalCartDashboard = document.querySelector(".signalcount");

// cart array

let products = null;
fetch('../product.json')
.then(response => response.json())
.then(data => {
    products = data;
    showItemDetails();
    updateCart()
});

function updateCart() {
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem("CART")) || [];
    renderSubTotal();
    renderCartItem();
}

    function showItemDetails(){
        
        let  productId = new URLSearchParams(window.location.search).get('id')
        let itemProduct = products.filter((value) => value.id.toString() == Number(productId))[0]
        console.log(itemProduct);
        
        if(!itemProduct){
            window.location.href = "./dashboard.html";
        }
        //and if it has, add data this product in html
        products.forEach(() =>{
            let details = document.querySelector(".details-con")
            details.innerHTML = `
            <div class="details-con" id="detailsCon">
            <div class="details-right">
                <img src="${itemProduct.imgSrc}" class="itemImgbig1">
            </div>
            <div class="details-left">
                <div class="d1">
                    <label for="text" class="section">Dashboard / item</label>
                    <label for="text" class="cart-item-title cart-item-title1">${itemProduct.name}</label>
                    <label for="text" class="cart-price cart-price1">${itemProduct.price}</label>
                    <label for="text" class="itemtextdesc">${itemProduct.description}</label>
                </div>
                <div class="d2">
                    <div class="btn" id="btnContainer-${itemProduct.id}">
                        <button class="cart" id="addcart" onclick="addToCart(${itemProduct.id})">Add to cart</button>
                    </div>
                    <div class="btn">
                        <button class="checkout-itemBtn" id="checkout-btn">Check out</button>
                    </div>
                </div>
                <div class="d2">
                    <img src="../icon/heart.png" class="wishlist">
                        <label for="text" class="details-wishlist" >Add to wishlist</label>
                </div>
                <div class="description-con" onclick="openDescription()">
                    <p>Description</p>
                    <img src="../icon/search.png" class="description-img">
                </div>
                <div class="desc-box" id="descBox">
                    <button class="desc-x" onclick="closeDescription()">x</button>
                        <label for="text" class="desc">${itemProduct.desc}</label>
                </div>
                <div class="d1">
                    <p>Share</p>
                </div>
            </div>
        </div>
            `
        })

    }
    showItemDetails()
    
    function addToCart(id) {
        //check product already exist in cart
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnite("plus", id)
    }else{
        const item = products.find((product) => product.id === id)
        const itemProduct = products.find((product) => product.id === id)
        cart.push({
            ...item,
            itemProduct,
            numberOfUnits: 1
        })

         const btnContainer = document.getElementById(`btnContainer-${itemProduct.id}`)
            btnContainer.innerHTML = `
                <div class="product-count" id="product-count">
                    <button class="product-cartcount" onclick="changeNumberOfUnite('minus',${id})">-</button>
                    <label for="text" class="product-counttxt" id="proCountBtn-${id}">1</label>
                    <button class="product-cartcount" id="productBotton-${id}" onclick="changeNumberOfUnite('plus',${id})">+</button>
                </div>
            `;
    }
        updateCart();
}





function renderSubTotal(){
    let totalPrice = 0;
    let totalItem = 0;

    cart.forEach((item) => {
        totalPrice  += item.price * item.numberOfUnits
        totalItem  += item.numberOfUnits;
    });
    // console.log(totalItem);

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
                    <img src="${item.imgSrc}" class="topupImg">
                </div>
                <div class="Amount">
                    <label for="text" class="cart-item-title">${item.name}</label>
                    <label for="text" class="cart-price">$${item.price}</label>
                </div>
                <div class="pro-count">
                    <button class="pro-cartcount" onclick="changeNumberOfUnite('minus',${item.id})">-</button>
                    <label for="text" class="pro-counttxt">${item.numberOfUnits}</label>
                    <button class="pro-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                </div>
                <div class="pro-counting">
                    <i class="fa-solid fa-trash-can remove" onclick="removeCartItem(${item.id})"></i>
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
            if(action === "minus"){
                numberOfUnits-- 
            }else if(action === "plus" && numberOfUnits <= item.instock){
                numberOfUnits++
            }
        }
        console.log('added',cart);
        return{
            ...item,
            numberOfUnits
        }
    });
    cart = cart.filter((item) => item.numberOfUnits > 0);
    const item = cart.find((p) => p.id === id)
    const btnContainer = document.getElementById(`btnContainer-${id}`)
    const quantityBNT = document.getElementById(`proCountBtn-${id}`)

    if(item){
        quantityBNT.innerText = item.numberOfUnits;
    }else{
        btnContainer.innerHTML = `
            <button class="cart" id="cart" onclick="addToCart(${id})">Add to cart</button>
        `
    }
    updateCart()
    
}