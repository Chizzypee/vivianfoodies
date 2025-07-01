const cartOrder = document.querySelector(".cartorder");

if(cart && cart.length > 0){
    renderSubTotals()
}
// render cart item
function renderCartStock(){
    const readCart = JSON.parse(localStorage.getItem("CART")) || [];
    cartOrder.innerHTML = "";
    if(localStorage && localStorage.length > 0){
        readCart.forEach((item) => {
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
                        <a href="../dashboard/item.html?id=${item.id}">
                            <label for="text" class="cart-price">$${item.price}</label>
                        </a>
                    </div>
                </div>
                <div class="cartorder2">
                    <div class="cart-count">
                        <div class="cartbtn">
                            <button class="pro-cartcount" onclick="changeNumberOfUnite('minus',${item.id})">-</button>
                            <label for="text" class="pro-counttxt">${item.quantity}</label>
                            <button class="pro-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                        </div>
                        <div class="cartremove">
                            <i class="fa-solid fa-trash-can remove" onclick="removeCartFromStock(${item.id})"></i>
                        </div>
                    </div>
                <label for="text" class="cart-priceee" id="totalsub">$${item.price * item.quantity}</label>
                </div>
            </div>
            `;
        })
    }
}
renderCartStock()

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
    renderCartStock()
    renderSubTotals()
}

function renderSubTotals(){
const cart = JSON.parse(localStorage.getItem("CART"));
    let grandTotal = 0;

    cart.forEach((item) => {
        grandTotal += item.price * item.quantity
    });
    document.querySelector(".cartAmount").innerHTML = `$${grandTotal.toFixed(2)}`
}

function removeCartFromStock(id){
    const readCart = JSON.parse(localStorage.getItem("CART"))
    console.log("delete", readCart);
    const cartItem = readCart.filter((cart) => cart.id !== id)
    localStorage.removeItem("CART");
    if(cartItem && cartItem.length > 0){
        localStorage.setItem("CART",JSON.stringify([...cartItem]))
    }
    renderCartStock()
    renderSubTotals()
}