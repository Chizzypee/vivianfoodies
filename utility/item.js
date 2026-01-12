

function showDetailsProduct(){
    //get product id from url
    let  slug = new URLSearchParams(window.location.search).get("slug")
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const findProduct = products.find(value => value.slug === slug)

    // if(!findProduct){
    //     console.log("product not found");
    // }
    products.forEach(()=>{
         let details = document.querySelector(".details-con")
         details.innerHTML = `
         <div class="details-con" id="detailsCon">
            <div class="details-sep">
                <div class="details-right">
                    <img src="${findProduct.imgSrc}" class="itemImgbig1">
                    <div class="d1">    
                        <label for="text" class="itemtextdesc">Share this post</label>
                        <img src="../icon/fb.png" class="f-img">
                        <img src="../icon/ig.jpeg" class="f-img">
                        <img src="../icon/twitter.png" class="f-img">
                    </div>
                </div>
                <div class="details-left">
                    <div class="details-left-con">
                        <div class="d1">    
                            <label for="text" class="itemtextdescbtn">Official Store</label>
                            <label for="text" class="itemtextdescbtn1">Non-refundable</label>
                        </div>
                        <div class="d1">    
                            <label for="text" class="itemtextdesc itemtextdesc1">${findProduct.description}</label>
                        </div>
                        <div class="d1">    
                            <label for="text" class="itemtextdesc2">Brand:</label>
                            <label for="text" class="itemtextdesc3">${findProduct.brand}</label>
                            <label for="text" class="itemtextdesc2">Similar products from</label>
                            <label for="text" class="itemtextdesc3">${findProduct.brand}</label>
                        </div>
                        <div class="d1">
                            <label for="text" class="cart-price cart-price1">RON ${findProduct.price}</label>
                        </div>
                        <div class="d1">    
                            <label for="text" class="itemtextdesc2">+ Shipping from </label>
                            <label for="text" class="itemtextdesc3">RON ${findProduct.deliveryfee}</label>
                            <label for="text" class="itemtextdesc2">to your location</label>
                            <label for="text" class="itemtextdesc3">See options</label>
                        </div>
                    </div>
                    <div class="details-left-con">
                        <div class="d1">   
                            <h3>Promotion</h3>
                        </div>
                        <div class="d1">   
                            <img src="../icon/approve.png" class="promotionImg">
                            <label for="text" class="itemtextdesc2">Call 08131251376 To Place Your Order</label>
                        </div>
                        <div class="d1">    
                            <img src="../icon/approve.png" class="promotionImg">
                            <label for="text" class="itemtextdesc2">Enjoy cheaper shipping fees when you select a Pickup station at chechout</label>
                        </div>
                    </div>
                    <div class="details-left-con">
                        <div class="d1">   
                            <h3>Description</h3>
                        </div>
                        <div class="d1">   
                            <label for="text" class="itemtextdesc2">${findProduct.desc}</label>
                        </div>
                    </div>
                    <div class="details-left-con">
                        <div class="d4">
                            <h3>You may also like</h3>
                            <div class="similier-pro">
                                
                            </div>
                            <div class="similier-pro1">
                                
                            </div>
                        </div>
                    </div>
                    <div class="details-left-con">
                        <div class="d2">   
                            <label for="text" class="itemtextdesc2">Question about this product?</label>
                            <div class="d3">   
                                <img src="../icon/approve.png" class="promotionImg">
                                <label for="text" class="itemtextdesc3">For Help</label>
                            </div>
                        </div>
                    </div>
                    <div class="details-left-con">
                        <div class="d1">   
                            <label for="text" class="itemtextdesc3">Report incorrect product information</label>
                        </div>
                    </div>
                    <div class="details-left-con" id="detailsLeft">
                        <div class="d1">
                            <div class="btn" id="btnContainer-${findProduct.id}">
                                <button class=" itemcart" id="addcart" onclick="addToCart(${findProduct.id})">
                                    <i class="fa-solid fa-cart-plus profile"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        })
    
    }
    showDetailsProduct()

    window.addEventListener("load", () => {
    updateCartBtn();
    showSimilarItem()
    showSimilarItem1()
})

function shuffleArray(array){
    return array.sort(()=> 0.5 - Math.random());
}

function showSimilarItem(currentProduct, limit = 2){
    const container = document.querySelector(".similier-pro")
    if(!container) return;
    // container.innerHTML = `<h3>You may also like</h3>`;
    const filtered = products.filter(product => product.id !== currentProduct);
    const randomItem = shuffleArray(filtered).slice(0, limit)
    randomItem.forEach(item => {
        productLink = `<a href="./item.html?slug=${item.slug}" class="product-link">`;
        container.innerHTML += `
           <div class="simi">
                <div class="simicon">
                    <div class="imgdiv">
                        ${productLink}<img src="${item.imgSrc}" class="simiIMg">
                    </div>
                    <div class="imgdiv">
                    ${productLink}<label for="text" class="simitext1">${item.description}</label>
                    ${productLink}<label for="text" class="simitext">${item.price}</label>
                    </div>
                </div>
                </div>
                
        `
    })
}
function showSimilarItem1(currentProduct, limit = 2){
    const container = document.querySelector(".similier-pro1")
    if(!container) return;
    const filtered = products.filter(product => product.id !== currentProduct);
    const randomItem = shuffleArray(filtered).slice(0, limit)
    randomItem.forEach(item => {
        productLink = `<a href="./item.html?slug=${item.slug}" class="product-link">`;
        container.innerHTML += `
           <div class="simi">
                <div class="simicon">
                    <div class="imgdiv">
                        ${productLink}<img src="${item.imgSrc}" class="simiIMg">
                    </div>
                    <div class="imgdiv">
                    ${productLink}<label for="text" class="simitext1">${item.description}</label>
                    ${productLink}<label for="text" class="simitext">${item.price}</label>
                    </div>
                </div>
            </div>
        `
    })
}