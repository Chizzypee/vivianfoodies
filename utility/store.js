

function renderProduct(){
    const params = new URLSearchParams(window.location.search).get("category");
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const filteredProduct = products.filter(product => product.category === params);
    console.log("view category", params); 
    console.log(filteredProduct);

    let container = document.querySelector(".stockcon")
    container.innerHTML = "";
    filteredProduct.forEach(product => {
        productLink = `<a href="../dashboard/item.html?slug=${product.slug}" class="stock-link">`;
    productLinkdash = `<a href="./item.html?slug=${product.slug}" class="stock-link">`;
        container.innerHTML += `
        <div class="stockcon-item">
            <div class="stockbox">    
                <div class="stock-imgBig">
                    <div class="item-img">
                        ${productLink || productLinkdash}<img src="${product.imgSrc}" class="itemImgbig"></a>
                    </div>
                    <div class="stockrapper">
                        ${productLink || productLinkdash}<label for="text" class="itemtextdesc">${product.description}</label></a>
                    </div>
                </div>
                <div class="price-btn">
                    <div class="prices">
                        <label for="text" class="price1" id="stock-${product.id}">In stock: ${product.instock}</label>
                        <label for="text" class="price">RON ${product.price}</label>
                    </div>
                    <div class="stockbtn" id="btnContainer-${product.id}">
                        <button class="stockcart" id="cart-${product.id}" onclick="addToCart(${product.id})">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        `
    })
}
renderProduct()
