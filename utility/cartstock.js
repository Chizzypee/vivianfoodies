
const cartOrder = document.querySelector(".cartorder"); 
const cartStock = JSON.parse(localStorage.getItem("CART"))
// if(cartStock && cartStock.length>0){
    
//    renderCartStock(cartStock)
// }

// render cart item
function renderCartStock(){
    const readCart = JSON.parse(localStorage.getItem("CART"))
    console.log(readCart);
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
                            <label for="text" class="pro-counttxt">${item.quantity}</label>
                            <button class="pro-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                        </div>
                        <div class="cartremove">
                            <i class="fa-solid fa-trash-can remove" onclick="removeCartItem(${item.id})"></i>
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
