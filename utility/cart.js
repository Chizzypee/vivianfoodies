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
const products = JSON.parse( localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("CART"))


if(cart && cart.length > 0){
    renderCartItem()
    updateCart(cart) 
    
}

// find the product
function showProduct(){
const soupItem = products.filter(item => item.category === "soup");
soupItem.slice(0, 8).forEach((product) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?slug=${product.slug}" class="product-link">`;
    productLinkdash = `<a href="./item.html?slug=${product.slug}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink || productLinkdash}<img src="${product.imgSrc}" class="itemImgbig"></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink || productLinkdash}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink || productLinkdash}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">RON ${product.price}</label>
                    <label for="text" class="price1" id="stock-${product.id}">In stock: ${product.instock}</label>
                </div>
                <div class="btn" id="btnContainer-${product.id}">
                    <button class="cart" id="cart-${product.id}" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
    productContainer.appendChild(productDiv)
})
 const wineItem = products.filter(item => item.category === "wine");
wineItem.slice(0, 8).forEach((product) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?slug=${product.slug}" class="product-link">`;
    productLinkdash = `<a href="./item.html?slug=${product.slug}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink || productLinkdash}<img src="${product.imgSrc}" class="itemImgbig" ></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink || productLinkdash}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink ||productLinkdash}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">RON ${product.price}</label>
                    <label for="text" class="price1">instock ${product.instock}</label>
                </div>
                <div class="btn"  id="btnContainer-${product.id}">
                    <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
    alcoholContainer.appendChild(productDiv)
})
const fruitItem = products.filter(item => item.category === "fruit");
fruitItem.slice(0, 8).forEach((product) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?slug=${product.slug}" class="product-link">`;
    productLinkdash = `<a href="./item.html?slug=${product.slug}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink || productLinkdash}<img src="${product.imgSrc}" class="itemImgbig" ></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink || productLinkdash}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink || productLinkdash}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">RON ${product.price}</label>
                    <label for="text" class="price1">instock ${product.instock}</label>
                </div>
                <div class="btn"  id="btnContainer-${product.id}">
                    <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
    drinkContainer.appendChild(productDiv)
})
const snacksItem = products.filter(item => item.category === "snacks");
snacksItem.slice(0, 8).forEach((product) => {
    let productDiv = document.createElement("div")
    productDiv.classList.add("product")
    productLink = `<a href="../dashboard/item.html?slug=${product.slug}" class="product-link">`;
    productLinkdash = `<a href="./item.html?slug=${product.slug}" class="product-link">`;
    productDiv.innerHTML = `
    <div class="food-item" id="footslide">
        <div class="itemborder">
            <div class="item-imgBig">
                <div class="item-img">
                    ${productLink || productLinkdash}<img src="${product.imgSrc}" class="itemImgbig" ></a>
                </div>
                <div class="itemrapper">
                    <img src="../icon/heart.png" class="itemImg">
                    ${productLink || productLinkdash}<label for="text" class="itemtext">${product.name}</label></a>
                    ${productLink || productLinkdash}<label for="text" class="itemtextdesc">${product.description}</label></a>
                </div>
            </div>
            <div class="price-btn">
                <div class="prices">
                    <label for="text" class="price">RON ${product.price}</label>
                    <label for="text" class="price1">instock ${product.instock}</label>
                </div>
                <div class="btn"  id="btnContainer-${product.id}">
                    <button class="cart" id="cart" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
    OilSaucesContainer.appendChild(productDiv)
})
}

//add to cart
function addToCart(id) {
    //check product already exist in cart
      const product = products.find((product) => product.id === id)
        if(!product) return;
        const {instock, ...data} = product;
        const readCart = JSON.parse(localStorage.getItem("CART")) || [];
        //check product already in cart
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
        // const btnContainer = document.getElementById(`btnContainer-${product.id}`)
        // const currentITem = readCart.find(item => item.id === id)
        // console.log(currentITem);
        // if(btnContainer && currentITem){
        //         btnContainer.innerHTML = `
        //         <div class="product-count" id="product-count">
        //             <button class="product-cartcount" onclick="changeNumberOfUnite('minus',${id})">-</button>
        //             <label for="text" class="product-counttxt">${currentITem.quantity}</label>
        //             <button class="product-cartcount" onclick="changeNumberOfUnite('plus',${id})">+</button>
        //         </div>
        //         `; 
        //     }
        //     changeNumberOfUnite()
        updateCartBtn()
    }
    showProduct()

function updateCartBtn(){
    const cart = JSON.parse(localStorage.getItem("CART")) || [];
    cart.forEach(item => {
        const btnContainer = document.getElementById(`btnContainer-${item.id}`)
        if(btnContainer){
            btnContainer.innerHTML = `
                <div class="product-count" id="product-count">
                    <button class="product-cartcount" onclick="changeNumberOfUnite('minus',${item.id})">-</button>
                    <label for="text" class="product-counttxt">${item.quantity}</label>
                    <button class="product-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                </div>
                `; 
            }
        })
        changeNumberOfUnite()
}
window.addEventListener("load", () => {
    updateCartBtn();
})

//update cart
function updateCart(product) {
    // console.log(product)
    let cart =  JSON.parse( localStorage.getItem("CART"));
    if(cart === null){
        if(product){
            //add product when cart not exist
            localStorage.setItem("CART", JSON.stringify([product])) 
        }
    } else{
        const exist = cart.find(item => item.id === product.id);
        // console.log(exist)
        if(!exist && product.hasOwnProperty("id")){
            cart.push(product);
            localStorage.setItem("CART", JSON.stringify(cart))
        }
    }
    
    renderCartItem()
    renderSubTotal()
}

// calculate subtotal
function renderSubTotal(){
const cart = JSON.parse(localStorage.getItem("CART"));
    let totalPrice = 0;
    let totalItem = 0;

    cart.forEach((item) => {
        totalPrice  += item.price * item.quantity
        totalItem  += item.quantity;
    });
    
    subtotal.innerHTML = `RON ${totalPrice.toFixed(2)} `
    totalcartitem.innerHTML =  `(${totalItem} item)`
    totalCartDashboard.innerHTML =  `${totalItem}`
}

// render cart item
function renderCartItem(){
    let redlocalStorage = JSON.parse(localStorage.getItem("CART")) //read the coming frm cart
    cartItemElement.innerHTML = "";
    if(localStorage && localStorage.length > 0){
        redlocalStorage.forEach((item) => {
            cartItemElement.innerHTML += `
        <div class="pro-wallattopup">
            <div class="wallat-con">
                <div class="pro-btn-show">
                    <div class="pro-wallatimg">
                        <a href="../dashboard/item.html?slug=${item.slug}">
                            <img src="${item.imgSrc}" class="topupImg">
                        </a>
                    </div>
                    <div class="Amount">
                        <a href="../dashboard/item.html?slug=${item.slug}">
                            <label for="text" class="cart-item-title">${item.name}</label>
                            <label for="text" class="cart-price">RON ${item.price}</label>
                        </a>
                    </div>
                    <div class="pro-count">
                        <button class="pro-cartcount" onclick="changeNumberOfUnite('minus',${item.id})">-</button>
                        <label for="text" class="pro-counttxt">${item.quantity}</label>
                        <button class="pro-cartcount" onclick="changeNumberOfUnite('plus',${item.id})">+</button>
                    </div>
                    <div class="pro-counting">
                        <i class="fa-regular fa-trash-can" style="color: #ff9500;" onclick="removeCartItem(${item.id})"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
    })
    }
}

// remov item from cart
function removeCartItem(id){
    let readCart = JSON.parse(localStorage.getItem("CART"))
    const cartItem = readCart.filter((cart) => cart.id !== id)
    localStorage.removeItem("CART");
    if(cartItem && cartItem.length >= 0){
        localStorage.setItem("CART",JSON.stringify([...cartItem]))
    }
    const btnContainer = document.getElementById("singalcount")
    btnContainer.innerHTML = `${cartItem.length}`;
    renderCartItem()
    renderSubTotal()
}

// change number of unite
function changeNumberOfUnite(action, id){
   let readCart = JSON.parse(localStorage.getItem("CART"))
   const itemToIncrease = readCart.find(item => item.id === id);
    if(action === "plus"){
        const productAvaliable = products.find(item => item.id === id
             && item.instock >=  (itemToIncrease?.quantity + 1 || 1 ));
    if(productAvaliable && itemToIncrease){
        const cartItem = readCart.find(item => item.id === id)
        const updatedItem = {...cartItem};
        updatedItem.quantity ++;
        
       readCart[readCart.indexOf(cartItem)] = updatedItem
        localStorage.removeItem("CART");
        localStorage.setItem("CART", JSON.stringify(readCart))
    }else if(productAvaliable && !itemToIncrease){
       const newItem = {
        id: productAvaliable.id,
        name: productAvaliable.name,
        price: productAvaliable.price,
        quantity: 1,
        imgSrc: productAvaliable.imgSrc
       };
       readCart.push(newItem)
       localStorage.setItem("CART",JSON.stringify(readCart))
    }

    } else if (action === "minus"){
        const cartItem = readCart.find(item => item.id === id);
        if(cartItem){
            if(cartItem.quantity - 1 > 0){
              let updatedItem =   {...cartItem};
              updatedItem.quantity--;
                 readCart[readCart.indexOf(cartItem)] = updatedItem
                localStorage.setItem("CART", JSON.stringify(readCart));
            }else {
                  const cartItems = readCart.filter(item => item.id !== id);
                localStorage.setItem("CART", JSON.stringify(cartItems)); //SAVE CART ON LOCASTORAGE
            }
        }
    }

    updateCart(readCart)

    //Re render quantitiy button
     const btnContainer = document.getElementById(`btnContainer-${id}`)
        const currentITem = readCart.find(item => item.id === id)
        // console.log(currentITem);
        if(btnContainer){
            if(currentITem){
                btnContainer.innerHTML = `
                <div class="product-count" id="product-count">
                    <button class="product-cartcount" onclick="changeNumberOfUnite('minus',${id})">-</button>
                    <label for="text" class="product-counttxt">${currentITem.quantity}</label>
                    <button class="product-cartcount" onclick="changeNumberOfUnite('plus',${id})">+</button>
                </div>
                `; 
                
            }else {
                btnContainer.innerHTML = `
                    <button class="cart" id="cart" onclick="addToCart(${id})">Add to cart</button>
                `
            }

            }
}

function CheckOut(){
     const userId = ocalStorage.getItem("userId");
    
    if(!userId){
        alert("please login first")
        return;
    }
    const cart = JSON.parse(localStorage.getItem("CART"));
    if(!cart || !cart.length){
        alert("cart is empty")
        return;
    }
    if(document.getElementsByClassName('checkoutbtn1')){
        window.location.href = "../checkout/checkout.html"
    }
}
function openCheckOut(){
    const cart = JSON.parse(localStorage.getItem("CART"));
    if(!cart || !cart.length){
        alert("cart is empty")
        return;
    }
    if(document.getElementsByClassName('checkoutbtn1')){
        window.location.href = "../checkout/checkout.html"
    }
}

function slugify(text){
    return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}
