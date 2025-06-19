const foodStore = document.querySelector(".food-flex")
const cartOrder = document.querySelector(".cartorder");
const subtotal = document.querySelector(".cartamount"); 
const partotal = document.querySelector(".cart-priceee");
const totalcartitem = document.querySelector(".totalcartitem");
const totalCartDashboard = document.querySelector(".signalcount");



//cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart()


//add to cart
function addToCart(id) {
    //check product already exist in cart
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnite("plus", id)
    }else{
        const item = products.find((product) => product.id === id)
        // console.log(item);
     
        cart.push({
            ...item,
            numberOfUnits: 1
        })
        console.log(cart);
    }

    updateCart();
}
showProduct()

//update cart
function updateCart() {
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem("CART")) || [];
    renderCartItem();
    renderSubTotal(); 
}

// calculate subtotal
function renderSubTotal(){
    let totalPrice = 0;
    let totalSub = 0;
    let totalItem = 0;
    
    console.log('total cart',cart);
    
    cart.forEach((item) => {
        totalPrice  += item.price * item.numberOfUnits;
        totalSub += item.price * item.numberOfUnits;
        totalItem  += item.numberOfUnits;

    });
    
    console.log({
        totalPrice:totalPrice,
        totalSub:totalSub,
        totalItem:totalItem,
    });
    subtotal.innerHTML = `$${totalPrice.toFixed(2)}` ;
    partotal.innerHTML = `$ ${totalSub.toFixed(2)} `;
    totalCartDashboard.innerHTML =  `${totalItem}`;
}


// render cart item
function renderCartItem(){
    cartOrder.innerHTML = ""; 
    cart.forEach((item) => {
        cartOrder.innerHTML += `
        <div class="cartorder-con">
            <div class="cartorder1">
                <div class="insdeorder">
                    <a href="../dashboard/item.html?id=${item.id}">
                        <img src="${item.imgSrc}" class="topupImg1">
                    </a>
                    <a href="../dashboard/item.html?id=${item.id}">
                        <label for="text" class="cart-item-title">${item.name}</label>
                    </a>
                </div>
            <div class="insdeorder1">
                <a href="../dashboard/item.html?id=${item.id}">
                    <label for="text" class="cart-price">$${item.price}</label>
                </a>
            </div>
            </div>
            <div class="cartorder2">
                <div class="cart-count">
                    <div class="cartbtn">
                        <button class="pro-cartcount" onclick="changeNumberOfUnite('minus',${item.id})">-</button>
                        <label for="text" class="pro-counttxt">${item.numberOfUnits}</label>
                        <button class="pro-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                    </div>
                    <div class="cartremove">
                        <i class="fa-solid fa-trash-can remove" onclick="removeCartItem(${item.id})"></i>
                    </div>
                </div>
            <label for="text" class="cart-priceee" id="totalsub">$${item.price * item.numberOfUnits}</label>
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
            }else if(action === "plus" && numberOfUnits < item.instock){
                numberOfUnits++
            }
        }
     
        return{
            ...item,
            numberOfUnits
        }
    });
    console.log(cart);
    updateCart();
    
}