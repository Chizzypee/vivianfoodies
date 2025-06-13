const cartOrder = document.querySelector(".cartorder");
const subtotal = document.querySelector(".cartamount"); 
const subtotal1 = document.querySelector(".cartamount1"); 
const partotal = document.querySelector(".cart-priceee");
const totalcartitem = document.querySelector(".totalcartitem");
const totalcartitem1 = document.querySelector(".totalcartitem1");
const totalCartDashboard = document.querySelector(".signalcount");
const orderedITem = document.querySelector(".orderedcon");
const totaldeliveryFee = document.querySelector(".deliveryfee");
const totalCustomFee = document.querySelector(".Customfee");
const totalfee = document.querySelector(".totalfee");



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
    renderOrderedITem();
    renderSubTotal(); 
}

// calculate subtotal
function renderSubTotal(){
    let totalPrice = 0;
    let totalSub = 0;
    let totalItem = 0;
    let totalDelivery = 0;
    let totalCustom = 0;
    let totalAll = 0;
    
    console.log('total cart',cart);
    
    cart.forEach((item) => {
        totalPrice  += item.price * item.numberOfUnits
        totalSub += item.price * item.numberOfUnits
        totalItem  += item.numberOfUnits;
        totalDelivery += item.deliveryfee - item.numberOfUnits;
        totalCustom += item.customfee - item.numberOfUnits;
        totalAll = totalSub + totalDelivery + totalCustom;
    });


    console.log({
        totalPrice:totalPrice,
        totalSub:totalSub,
        totalItem:totalItem,
    });

    totalfee.innerHTML = `$${totalAll.toFixed(2)}`
    subtotal1.innerHTML = `$${totalPrice.toFixed(2)}`
    totalcartitem1.innerHTML = `(${totalItem})`
    totaldeliveryFee.innerHTML =  `$${totalDelivery.toFixed(2)}`
    totalCustomFee.innerHTML =  `$${totalCustom.toFixed(2)}`
    subtotal.innerHTML = `$${totalPrice.toFixed(2)}` 
    
}


// render cart item
function renderOrderedITem(){
orderedITem.innerHTML = "";
cart.forEach((item) =>{
    orderedITem.innerHTML += `
    <div class="orderedcon">
        <div class="orderIMG-text">
            <img src="${item.imgSrc}" class="imgorder">
            <div class="orderedInfo">
                <label for="text" class="orderedText">${item.name}</label>
                <label for="text" class="orderedText1">(${item.description})</label>
            </div>
            <div class="orderIMG-text1">
                <label for="text" class="cartamount">$${item.price * item.numberOfUnits}</label>
            </div>
        </div>
    </div>
    
    `
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