let productContainer = document.querySelector(".food-slid");
let productCon = document.querySelector(".foodcon");
const alcoholContainer = document.querySelector(".food-slid1");
const drinkContainer = document.querySelector(".food-slid2");
const OilSaucesContainer = document.querySelector(".food-slid3");
const foodStore = document.querySelector(".food-flex")
let cartItemElement = document.querySelector(".pro-wallattopup");
const cartorder = document.querySelector(".cartorder");
const subtotal = document.querySelector(".cartamount");
const totalcartitem = document.querySelector(".totalcartitem");
const totalCartDashboard = document.querySelector(".signalcount");
const addCartBTn = document.querySelector(".addBTn");
const productCounttxt = document.querySelector(".product-counttxt");


// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
console.log(cart);
updateCart()

let products = null;
fetch('product.json')
.then(response => response.json())
.then(data => {
    products = data;
    // showProduct()
})
async function fetchAndDisplay() {
    try {
        const response = await fetch('product.json')
        const data = await response.json()

        console.log("Soup:");
        data.Soup.slice(0, 8).forEach(Soup => {
            let productDiv = document.createElement("div")
            productDiv.classList.add("product")
            productLink = `<a href="../dashboard/item.html?id=${Soup.id}" class="product-link">`;
            productDiv.innerHTML = `
            <div class="food-item" id="footslide">
                <div class="itemborder">
                    <div class="item-imgBig">
                        <div class="item-img">
                            ${productLink}<img src="${Soup.imgSrc}" class="itemImgbig"></a>
                        </div>
                        <div class="itemrapper">
                            <img src="../icon/heart.png" class="itemImg">
                            ${productLink}<label for="text" class="itemtext">${Soup.name}-Soup</label></a>
                            ${productLink}<label for="text" class="itemtextdesc">${Soup.description}</label></a>
                        </div>
                    </div>
                    <div class="price-btn">
                        <div class="prices">
                            <label for="text" class="price">$${Soup.price}</label>
                            <label for="text" class="price1" id="stock-${Soup.id}">In stock: ${Soup.instock}</label>
                        </div>
                        <div class="btn" id="btnContainer-${Soup.id}">
                            <button class="cart" id="cart" onclick="addToCart(${Soup.id})">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            productContainer.appendChild(productDiv)
            // console.log(`ID: ${Soup.id}, name: ${Soup.name}, imgSrc: ${Soup.imgSrc}`);
        })

        console.log("meat");
        data.Drink.forEach(drinks => {
            let productDiv = document.createElement("div")
            productDiv.classList.add("product")
            productLink = `<a href="../dashboard/item.html?id=${drinks.id}" class="product-link">`;
            productDiv.innerHTML = `
            <div class="food-item" id="footslide">
                <div class="itemborder">
                    <div class="item-imgBig">
                        <div class="item-img">
                            ${productLink}<img src="${drinks.imgSrc}" class="itemImgbig"></a>
                        </div>
                        <div class="itemrapper">
                            <img src="../icon/heart.png" class="itemImg">
                            ${productLink}<label for="text" class="itemtext">${drinks.name}-Soup</label></a>
                            ${productLink}<label for="text" class="itemtextdesc">${drinks.description}</label></a>
                        </div>
                    </div>
                    <div class="price-btn">
                        <div class="prices">
                            <label for="text" class="price">$${drinks.price}</label>
                            <label for="text" class="price1" id="stock-${drinks.id}">In stock: ${drinks.instock}</label>
                        </div>
                        <div class="btn" id="btnContainer-${drinks.id}">
                            <button class="cart" id="cart" onclick="addToCart(${drinks.id})">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            alcoholContainer.appendChild(productDiv)
            // console.log(`ID: ${drinks.id}, name: ${drinks.name}`);
        })

        console.log("fruit");
        data.Fruit.forEach(fruit => {
            let productDiv = document.createElement("div")
            productDiv.classList.add("product")
            productLink = `<a href="../dashboard/item.html?id=${fruit.id}" class="product-link">`;
            productDiv.innerHTML = `
            <div class="food-item" id="footslide">
                <div class="itemborder">
                    <div class="item-imgBig">
                        <div class="item-img">
                            ${productLink}<img src="${fruit.imgSrc}" class="itemImgbig"></a>
                        </div>
                        <div class="itemrapper">
                            <img src="../icon/heart.png" class="itemImg">
                            ${productLink}<label for="text" class="itemtext">${fruit.name}-Soup</label></a>
                            ${productLink}<label for="text" class="itemtextdesc">${fruit.description}</label></a>
                        </div>
                    </div>
                    <div class="price-btn">
                        <div class="prices">
                            <label for="text" class="price">$${fruit.price}</label>
                            <label for="text" class="price1" id="stock-${fruit.id}">In stock: ${fruit.instock}</label>
                        </div>
                        <div class="btn" id="btnContainer-${fruit.id}">
                            <button class="cart" id="cart" onclick="addToCart(${fruit.id})">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            drinkContainer.appendChild(productDiv)
            // console.log(`ID: ${fruit.id}, name: ${fruit.name}`);
        })
        console.log("snack");
        data.Snack.forEach(Snack => {
            let productDiv = document.createElement("div")
            productDiv.classList.add("product")
            productLink = `<a href="../dashboard/item.html?id=${Snack.id}" class="product-link">`;
            productDiv.innerHTML = `
            <div class="food-item" id="footslide">
                <div class="itemborder">
                    <div class="item-imgBig">
                        <div class="item-img">
                            ${productLink}<img src="${Snack.imgSrc}" class="itemImgbig"></a>
                        </div>
                        <div class="itemrapper">
                            <img src="../icon/heart.png" class="itemImg">
                            ${productLink}<label for="text" class="itemtext">${Snack.name}-Soup</label></a>
                            ${productLink}<label for="text" class="itemtextdesc">${Snack.description}</label></a>
                        </div>
                    </div>
                    <div class="price-btn">
                        <div class="prices">
                            <label for="text" class="price">$${Snack.price}</label>
                            <label for="text" class="price1" id="stock-${Snack.id}">In stock: ${Snack.instock}</label>
                        </div>
                        <div class="btn" id="btnContainer-${Snack.id}">
                            <button class="cart" id="cart" onclick="addToCart(${Snack.id})">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            OilSaucesContainer.appendChild(productDiv)
            // console.log(`ID: ${Snack.id}, name: ${Snack.name}`);
        })
        
        
    } catch (error) {
        console.log("erro fetching json");
    }
}
fetchAndDisplay()

// find the product
// function showProduct(){
// products.slice(0, 8).forEach((product, item) => {
//     let productDiv = document.createElement("div")
//     productDiv.classList.add("product")
//     productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
//     productDiv.innerHTML = `
//     <div class="food-item" id="footslide">
//         <div class="itemborder">
//             <div class="item-imgBig">
//                 <div class="item-img">
//                     ${productLink}<img src="${product.imgSrc}" class="itemImgbig"></a>
//                 </div>
//                 <div class="itemrapper">
//                     <img src="../icon/heart.png" class="itemImg">
//                     ${productLink}<label for="text" class="itemtext">${product.name}-Soup</label></a>
//                     ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
//                 </div>
//             </div>
//             <div class="price-btn">
//                 <div class="prices">
//                     <label for="text" class="price">$${product.price}</label>
//                     <label for="text" class="price1" id="stock-${product.id}">In stock: ${product.instock}</label>
//                 </div>
//                 <div class="btn" id="btnContainer-${product.id}">
//                     <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     productContainer.appendChild(productDiv)

   
// })
// products.slice(0, 8).forEach((product) => {
//     let productDiv = document.createElement("div")
//     productDiv.classList.add("product")
//     productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
//     productDiv.innerHTML = `
//     <div class="food-item" id="footslide">
//         <div class="itemborder">
//             <div class="item-imgBig">
//                 <div class="item-img">
//                     ${productLink}<img src="${product.imgSrc}" class="itemImgbig" ></a>
//                 </div>
//                 <div class="itemrapper">
//                     <img src="../icon/heart.png" class="itemImg">
//                     ${productLink}<label for="text" class="itemtext">${product.name}</label></a>
//                     ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
//                 </div>
//             </div>
//             <div class="price-btn">
//                 <div class="prices">
//                     <label for="text" class="price">$${product.price}</label>
//                     <label for="text" class="price1">instock ${product.instock}</label>
//                 </div>
//                 <div class="btn"  id="btnContainer-${product.id}">
//                     <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     // alcoholContainer.appendChild(productDiv)
// })
// products.slice(0, 8).forEach((product) => {
//     let productDiv = document.createElement("div")
//     productDiv.classList.add("product")
//     productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
//     productDiv.innerHTML = `
//     <div class="food-item" id="footslide">
//         <div class="itemborder">
//             <div class="item-imgBig">
//                 <div class="item-img">
//                     ${productLink}<img src="${product.imgSrc}" class="itemImgbig" ></a>
//                 </div>
//                 <div class="itemrapper">
//                     <img src="../icon/heart.png" class="itemImg">
//                     ${productLink}<label for="text" class="itemtext">${product.name}</label></a>
//                     ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
//                 </div>
//             </div>
//             <div class="price-btn">
//                 <div class="prices">
//                     <label for="text" class="price">$${product.price}</label>
//                     <label for="text" class="price1">instock ${product.instock}</label>
//                 </div>
//                 <div class="btn"  id="btnContainer-${product.id}">
//                     <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     // drinkContainer.appendChild(productDiv)
// })
// products.slice(0, 8).forEach((product) => {
//     let productDiv = document.createElement("div")
//     productDiv.classList.add("product")
//     productLink = `<a href="../dashboard/item.html?id=${product.id}" class="product-link">`;
//     productDiv.innerHTML = `
//     <div class="food-item" id="footslide">
//         <div class="itemborder">
//             <div class="item-imgBig">
//                 <div class="item-img">
//                     ${productLink}<img src="${product.imgSrc}" class="itemImgbig" ></a>
//                 </div>
//                 <div class="itemrapper">
//                     <img src="../icon/heart.png" class="itemImg">
//                     ${productLink}<label for="text" class="itemtext">${product.name}</label></a>
//                     ${productLink}<label for="text" class="itemtextdesc">${product.description}</label></a>
//                 </div>
//             </div>
//             <div class="price-btn">
//                 <div class="prices">
//                     <label for="text" class="price">$${product.price}</label>
//                     <label for="text" class="price1">instock ${product.instock}</label>
//                 </div>
//                 <div class="btn"  id="btnContainer-${product.id}">
//                     <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//     // OilSaucesContainer.appendChild(productDiv)
// })

// }


//add to cart
function addToCart(id) {
    //check product already exist in cart
    // const item = cart.find(product => product.id === id)
    if(cart.some((item) => item.id === id)){
        changeNumberOfUnite("plus", id)
        return;
    }else{
        const item = products.find((product) => product.id === id)
        const product = products.find((product) => product.id === id)
        if(!item) return;

        //add to cart
        cart.push({
            ...item,
            ...product,
            numberOfUnits: 1
        })
        //replace btn 
        const btnContainer = document.getElementById(`btnContainer-${Soup.id}`)
        btnContainer.innerHTML = ""
        cart.forEach((product) => {
            btnContainer.innerHTML += `
            <div class="product-count" id="product-count">
                <button class="product-cartcount" onclick="changeNumberOfUnite('minus',${product.id});  increaseInStock(${product.id});">-</button>
                <label for="text" class="product-counttxt" id="proCountBtn-${product.id}">1</label>
                <button class="product-cartcount" id="productBotton-${product.id}" onclick="changeNumberOfUnite('plus',${product.id}); reduceInStock(${product.id})">+</button>
            </div>
            `;      

            updateCart();
        })
    }
}
showProduct()




//update cart
function updateCart() {
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem("CART")) || [];
    renderSubTotal();
    renderCartItem();
}

//load cart
// function loadCart(){
//     const cart = localStorage.getItem('cart');
//     return cart ? JSON.parse(cart) : {};
// }

// //when + - is clicked
// function updateQuantity(id, newQuantity){
//     const cart = loadCart();
//     cart[id] = newQuantity
//     updateCart(cart)
// }

// calculate subtotal
function renderSubTotal(){
    let totalPrice = 0;
    let totalItem = 0;

    cart.forEach((item) => {
        totalPrice  += item.price * item.numberOfUnits
        totalItem  += item.numberOfUnits;
    });
    console.log(totalItem);

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
                    <a href="../dashboard/item.html?id=${item.id}">
                        <img src="${item.imgSrc}" class="topupImg">
                    </a>
                </div>
                <div class="Amount">
                    <a href="../dashboard/item.html?id=${item.id}">
                        <label for="text" class="cart-item-title">${item.name}</label>
                        <label for="text" class="cart-price">$${item.price}</label>
                    </a>
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
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id){
            if(action === "minus"){
                numberOfUnits--
            }else if(action === "plus" && numberOfUnits < item.instock){
                numberOfUnits++
            }
        }
        console.log('hree',cart);
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

// function reduceInstock(id){
//     const product = products.find(p => p.id === id);
//     if(product && product.instock > 0){
//         product.instock -= 1;

//         //update the Dom
//         const stockElm = document.getElementById(`stock-${id}`)
//         stockElm.textContent = `in stock: ${product.instock}`;

//         // disable btn if out of stock
//         if(product.instock === 0){
//             const button = document.getElementById(`productBotton-${id}`)
//             button.disableed = true;
//             button.textContent = "Out of stock";
//         }else {
//             alert("product is out of stock")
//         }
//         updateCart()
//     }
// }

function savePro(){
    localStorage.setItem("cart", JSON.stringify(cart))
}
// Decrease stock
function reduceInStock(id) {
  const product = products.find(p => p.id === id);
  if (product && product.instock > 0) {
    product.instock -= 1;
    
    
    // add to cart
    const cartItem = cart.find(p => p.id === id)
    if(cartItem){
        cartItem.instock++;
    }else{
        cart.push({
            id: product.id,
            name: product.name,
            instock: 1
        })
    }
    updateDOM(id, product.instock);
     savePro()
    updateCart();

    if (product.instock === 0) {
      const button = document.getElementById(`productButton-${id}`);
      if (button) {
        button.disabled = true;
        button.textContent = "Out of stock";
      }
    }
   
} else {
    alert("Product is out of stock");
}
}

// // Increase stock
function increaseInStock(id) {
  const product = products.find(p => p.id === id);
  if (product) {
    product.instock += 1;
    updateDOM(id, product.instock);

    const button = document.getElementById(`productButton-${id}`);
    if (button) {
      button.disabled = false;
      button.textContent = "Add to cart";
    }
    savePro();
    updateCart();
  }
}

// Update DOM display
function updateDOM(id, stock) {
  const stockElm = document.getElementById(`stock-${id}`);
  if (stockElm) {
    stockElm.textContent = `In stock: ${stock}`;
  }
}