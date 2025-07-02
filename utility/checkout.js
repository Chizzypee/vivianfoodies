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
        totalDelivery += item.deliveryfee - item.quantity;
        totalCustom += item.customfee - item.quantity;
        totalAll = totalSub + totalDelivery + totalCustom;
    });

    totalfee.innerHTML = `$${totalAll.toFixed(2)}`
    subtotal1.innerHTML = `$${totalPrice.toFixed(2)}`
    totalcartitem1.innerHTML = `Subtotal (${totalItem}) item`
    totaldeliveryFee.innerHTML =  `$${totalDelivery.toFixed(2)}`
    totalCustomFee.innerHTML =  `$${totalCustom.toFixed(2)}`
    subtotal.innerHTML = `$${totalPrice.toFixed(2)}` 

    subtotal2.innerHTML = `$${totalPrice.toFixed(2)}`
    totaldeliveryFee1.innerHTML =  `$${totalDelivery.toFixed(2)}`
    totalcartitem1.innerHTML = `Subtotal (${totalItem}) item`
    totalfee1.innerHTML = `$${totalAll.toFixed(2)}`
    totalCustomFee1.innerHTML =  `$${totalCustom.toFixed(2)}`
    
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
function renderOrderedITem1(){
    const readCart = JSON.parse(localStorage.getItem("CART"))
    orderedITem1.innerHTML = "";
    readCart.forEach((item) =>{
        orderedITem1.innerHTML += `
        <div class="orderedcon">
            <div class="orderIMG-text">
                <img src="${item.imgSrc}" class="imgorder">
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