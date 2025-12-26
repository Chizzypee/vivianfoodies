const cartOrder = document.querySelector(".cartorder");
const subtotal = document.querySelector(".cartamount"); 
const subtotal1 = document.querySelector(".cartamount1"); 
const partotal = document.querySelector(".cart-priceee");
const totalcartitem = document.querySelector(".totalcartitem");
const totalcartitem1 = document.querySelector(".totalcartitem1");
const totalCartDashboard = document.querySelector(".signalcount");
const orderedITem = document.querySelector(".orderedcon");
const orderedITem1 = document.querySelector(".orderedcon1");
const totaldeliveryFee = document.querySelector(".deliveryfee");
const totalCustomFee = document.querySelector(".Customfee");
const totalfee = document.querySelector(".totalfee");

const subtotal2 = document.querySelector(".cartamount2"); 
const totaldeliveryFee1 = document.querySelector(".deliveryfee1");
const totalCustomFee1 = document.querySelector(".Customfee1");
const totalfee1 = document.querySelector(".totalfee1");



let cart = JSON.parse(localStorage.getItem("CART"))
if(cart && cart.length > 0){
   renderOrderedITem()
   renderOrderedITem1()
    renderSubTotalChechOut()
}


//cart array

//add to cart
function addToCart(id) {
      const product = products.find((product) => product.id === id)
        if(!product) return;
        const {instock, ...data} = product;
        const readCart = JSON.parse(localStorage.getItem("CART")) || [];
        const getcart = readCart.find(product => product.id === id)
        if(getcart){
            if(getcart.quantity < product.instock){
                getcart.quantity += 1
            }
        }else {
            readCart.push({
                ...data,
                quantity: 1,
                total: data.price*1,
                id: id
            })
        }
        localStorage.setItem("CART", JSON.stringify(readCart));
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
    renderOrderedITem()
    renderOrderedITem1()
    renderSubTotalChechOut()
}
// calculate subtotal
function renderSubTotalChechOut(){
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


    totalfee.innerHTML = `RON ${totalAll.toFixed(2)}`
    subtotal1.innerHTML = `RON ${totalPrice.toFixed(2)}`
    totalcartitem1.innerHTML = `Subtotal (${totalItem}) item`
    totaldeliveryFee.innerHTML =  `RON ${totalDelivery.toFixed(2)}`
    totalCustomFee.innerHTML =  `RON ${totalCustom.toFixed(2)}`
    subtotal.innerHTML = `RON ${totalPrice.toFixed(2)}` 

    subtotal2.innerHTML = `RON ${totalPrice.toFixed(2)}`
    totaldeliveryFee1.innerHTML =  `RON ${totalDelivery.toFixed(2)}`
    totalcartitem1.innerHTML = `Subtotal (${totalItem}) item`
    totalfee1.innerHTML = `RON ${totalAll.toFixed(2)}`
    totalCustomFee1.innerHTML =  `RON ${totalCustom.toFixed(2)}`
    
}
// render cart item
function renderOrderedITem(){
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
                    <label for="text" class=" cartamountcheck1 cartamount">RON ${item.price * item.quantity}</label>
                </div>
            </div>
        </div>
        `
})
   
}
function renderOrderedITem1(){
    const readCart = JSON.parse(localStorage.getItem("CART"))
    orderedITem1.innerHTML = "";
    readCart.forEach((item) =>{
        orderedITem1.innerHTML += `
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

const checkOutForm = document.getElementById("signupForm")
checkOutForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userId = JSON.parse(localStorage.getItem("userId"));
    const cart = JSON.parse(localStorage.getItem("CART"));

    if(!userId || !cart || cart.length === 0){
        alert("cart is empty")
        return;
    }

    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const postalcode = document.getElementById("postalcode").value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const reference = document.getElementById("displayRandomNumber")

    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
     const res = await fetch(`${baseUrl}${routes.createOrder}`,{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            userId,
            items: cart,
            totalAmount,
            delivery: { 
                email,
                country,
                firstName,
                lastName,
                phonenumber,
                address,
                city,
                state,
                postalcode,
            },
            paymentMethod: "bank",
            reference,
        }),
    });
    const result = await res.json();
    if(!res.ok){
        alert(result.msg);
        return
    }
    console.log(result);
    localStorage.setItem("order", JSON.stringify(result.data))
    // localStorage.removeItem("CART")
        // alert("order saved successfully")
        // console.log(result.data, " here result");
        // Redirect base on payment selected
        // if(paymentMethod === "paystack"){
        //     window.location.href = "../checkout/loadingpaystack.html"
        // }else if(paymentMethod === "bank"){
            // window.location.href = "../checkout/loadingtransfer.html"
            window.location.href = "../checkout/paytransfer.html"
        // }
        // getOrder()
        
});



window.addEventListener("load", async() => {
    const userId = JSON.parse(localStorage.getItem("userId"))
    if(!userId){
        console.log("No userId in localstorage")
        return;
    }
    console.log("user ID found on load:", userId); 
    // getOrder()   
})