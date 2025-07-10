const orderedITem = document.querySelector(".orderedcon");
const subtotal = document.querySelector(".cartamount-trans"); 
const totalcartitem = document.querySelector(".totalcartitem-trans");
const totaldeliveryFee = document.querySelector(".deliveryfee-trans");
const totalCustomFee = document.querySelector(".Customfee-trans");
const totalfee = document.querySelector(".totalfee-trans");

const Billingamount = document.querySelector(".Billingamount");
const payamount = document.querySelector(".payamountSub");

let cart = JSON.parse(localStorage.getItem("CART"))
if(cart && cart.length > 0){
    renderPayTransfer()
    renderSubTransferPayment()
}

//update cart
function updateCart(product) {
    let cart =  JSON.parse( localStorage.getItem("CART"));
    if(cart === null){
        if(product){
            localStorage.setItem("CART", JSON.stringify([product])) 
        }
    } else{
        const exist = cart.find(item => item.id === product.id);
        if(!exist && product.hasOwnProperty("id")){
            cart.push(product);
            localStorage.setItem("CART", JSON.stringify(cart))
        }
    }
    renderPayTransfer()
    renderSubTransferPayment()
}

// calculate subtotal
function renderSubTransferPayment(){
    const cart = JSON.parse(localStorage.getItem("CART"));
    let totalPrice = 0;
    let totalSub = 0;
    let totalItem = 0;
    let totalDelivery = 0;
    let totalCustom = 0;
    let totalAll = 0;
    
    cart.forEach((item) => {
        totalPrice  += item.price * item.quantity
        totalSub += item.price * item.quantity
        totalItem  += item.quantity;
        totalDelivery = item.deliveryfee;
        totalCustom = item.customfee ;
        totalAll = totalSub + totalDelivery + totalCustom;
    });

    Billingamount.innerHTML = `Bank Deposit - RON ${totalAll.toFixed(2)} `
    payamount.innerHTML = `RON ${totalPrice.toFixed(2)} `

    totalfee.innerHTML = `$${totalAll.toFixed(2)}`
    subtotal.innerHTML = `$${totalPrice.toFixed(2)}`
    totalcartitem.innerHTML = `Subtotal (${totalItem}) item`
    totaldeliveryFee.innerHTML =  `$${totalDelivery.toFixed(2)}`
    totalCustomFee.innerHTML =  `$${totalCustom.toFixed(2)}`


   
    
}

// render cart item
function renderPayTransfer(){
    const readCart = JSON.parse(localStorage.getItem("CART"))
    orderedITem.innerHTML = "";
    readCart.forEach((item) =>{
        orderedITem.innerHTML += `
        <div class="orderedcon">
            <div class="orderIMG-text">
                <img src="${item.imgSrc}" class="imgorder">
                <div class="paritem">${item.quantity}</div>
                <div class="orderedInfo">
                    <label for="text" class="orderedText">${item.name} - </label>
                    <label for="text" class="orderedText1">(${item.description})</label>
                </div>
                <div class="orderIMG-text1">
                    <label for="text" class="cartamount cartamountcheck1">$${item.price * item.quantity}</label>
                </div>
            </div>
        </div>
        `
})
   
}