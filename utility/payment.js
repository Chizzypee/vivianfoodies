const paySubTotal = document.querySelector(".payamount");
const cardBtnSubtotal = document.querySelector(".card-pay");
const transferSubtotal = document.querySelector(".transferinfo1");
const transferSubtotal1 = document.querySelector(".transferinfo2");

let cart = JSON.parse(localStorage.getItem("CART"))
if(cart && cart.length > 0){
    renderSubTotalPayment()
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
    renderSubTotalPayment()
}

// calculate subtotal
function renderSubTotalPayment(){
    const cart = JSON.parse(localStorage.getItem("CART"));
    let totalPrice = 0;
    
    cart.forEach((item) => {
        totalPrice  += item.price * item.quantity
    });

    cardBtnSubtotal.innerHTML = `Pay RON ${totalPrice.toFixed(2)} `
    paySubTotal.innerHTML = `Pay RON ${totalPrice.toFixed(2)} `
    transferSubtotal.innerHTML = `RON ${totalPrice.toFixed(2)} `
    transferSubtotal1.innerHTML = `Transfer RON ${totalPrice.toFixed(2)} to paystack Chackout `
}

function startCountdown(durationInSeconds, displayElementId){
    let timeleft = durationInSeconds;
    const display = document.getElementById(displayElementId)
    const timer = setInterval(function() {
        const minutes = Math.floor(timeleft / 60);
        const seconds = timeleft % 60;

        display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`
        if(--timeleft < 0){
            clearInterval(timer);
            display.textContent = `Time's up`
            window.location.href = "../checkout/checkout.html"
        }
    }, 1000)
}
startCountdown(300, "countdown")
