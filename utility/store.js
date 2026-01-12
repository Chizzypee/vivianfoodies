

function renderProduct(){
    const params = new URLSearchParams(window.location.search).get("category");
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const filteredProduct = products.filter(product => product.category === params);
    console.log("view category", params); 
    console.log(filteredProduct);

    let container = document.querySelector(".stockcon")
    container.innerHTML = "";
    filteredProduct.forEach(product => {
        productLink = `<a href="../dashboard/item.html?slug=${product.slug}" class="product-link">`;
    productLinkdash = `<a href="./item.html?slug=${product.slug}" class="product-link">`;
        container.innerHTML += `
        <div class="stockcon-item">
            <div class="stockbox">    
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
        `
    })
}
renderProduct()
