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

    totalfee.innerHTML = `RON ${totalAll.toFixed(2)}`
    subtotal.innerHTML = `RON ${totalPrice.toFixed(2)}`
    totalcartitem.innerHTML = `Subtotal (${totalItem}) item`
    totaldeliveryFee.innerHTML =  `RON ${totalDelivery.toFixed(2)}`
    totalCustomFee.innerHTML =  `RON ${totalCustom.toFixed(2)}`
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
                    <label for="text" class="cartamount cartamountcheck1">RON ${item.price * item.quantity}</label>
                </div>
            </div>
        </div>
        `
})
}
function continueShopping(){
    if(document.getElementsByClassName('Continueshopping')){
        window.location.href = "../dashboard/dashboard.html"
    }
    localStorage.removeItem("CART")
}


async function getOrder(returnOnlyData = false) {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const url = `${baseUrl}${routes.getOrder}/${userId}`;
    const res = await fetch(url);
    const result = await res.json();
    console.log(result, "order infomation here");
    if (!res.ok) throw new Error(result.error);
    if (returnOnlyData) return result.data;  // <-- THIS FIXES YOUR ISSUE
    if(!result.data || result.data.length === 0) return;
    const order = result.data[0];
    // const delivery = order.delivery;
    // const reference = order.reference;  

    const firstDelivery = Array.isArray(order.delivery)? order.delivery : Object.values(order.delivery || {}) ;
    const deliverArray = firstDelivery[0]
    // Otherwise update the UI normally
    document.getElementById("senderName").innerText = deliverArray?.firstName;
    document.getElementById("displayEmail").innerText = deliverArray.email;
    document.getElementById("displayCountry").innerText = deliverArray.country;
    document.getElementById("displayFirstname").innerText = deliverArray.firstName;
    document.getElementById("displayLastname").innerText = deliverArray.lastName;
    document.getElementById("displayNumber").innerText = deliverArray.phonenumber;
    document.getElementById("displayAddress").innerText = deliverArray.address;
    document.getElementById("displayCity").innerText = deliverArray.city;
    document.getElementById("displayState").innerText = deliverArray.state;
    document.getElementById("displayPostalcode").innerText = deliverArray.postalcode;

    document.getElementById("displayFirstname1").innerText = deliverArray.firstName;
    document.getElementById("displayLastname1").innerText = deliverArray.lastName;
    document.getElementById("displayNumber1").innerText = deliverArray.phonenumber;
    document.getElementById("displayAddress1").innerText = deliverArray.address;
    document.getElementById("displayCity1").innerText = deliverArray.city;
    document.getElementById("displayState1").innerText = deliverArray.state;
    
    document.getElementById("displayPostalcode1").innerText = deliverArray.postalcode;
    document.getElementById("Billingamount").innerText = `Bank Deposit - RON ${order.totalAmount}`;
    document.getElementById("displayRandomNumber").innerText = reference ? reference: "reference data";

}


window.addEventListener("load", async() => {
    const userId = JSON.parse(localStorage.getItem("userId"))
    if(!userId){
        console.log("No userId in localstorage")
        return;
    }
    console.log("user ID found on paybank:", userId); 
    getOrder()
})