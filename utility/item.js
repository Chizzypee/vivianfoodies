

function showDetailsProduct(){
    //get product id from url
    // let  params = new URLSearchParams(window.location.search).get("id")
    let  slug = new URLSearchParams(window.location.search).get("slug")
    // const slug = params.get("slug");
    const products = JSON.parse(localStorage.getItem("products")) || [];
    // const findProduct = products.filter((value) => value.id.toString() == Number(params))[0]
    const findProduct = products.find(value => value.slug === slug)
    // console.log("am here", findProduct);     

    if(!findProduct){
        //  window.location.href = "../index.html";
        console.log("product not found");
    }
    products.forEach(()=>{
         let details = document.querySelector(".details-con")
         details.innerHTML = `
         <div class="details-con" id="detailsCon">
             <div class="carthead-con">
                    <p>Shopping cart</p>
                    <a href="../index.html">Contiune shopping</a>
                </div>
            <div class="details-sep">
                <div class="details-right">
                    <img src="${findProduct.imgSrc}" class="itemImgbig1">
                </div>
                <div class="details-left">
                    <div class="d1">
                        <label for="text" class="section">Dashboard / item</label>
                        <label for="text" class="cart-price cart-price1">${findProduct.name}</label>
                        <label for="text" class="cart-price cart-price1">RON ${findProduct.price}</label>
                        <label for="text" class="itemtextdesc itemtextdesc1">${findProduct.description}</label>
                    </div>
                    <div class="d2">
                        <div class="btn" id="btnContainer-${findProduct.id}">
                            <button class="cart cart1" id="addcart" onclick="addToCart(${findProduct.id})">Add to cart</button>
                        </div>
                    </div>
                    <div class="description-con" onclick="openDescription()">
                        <p>Description</p>
                        <img src="../icon/search.png" class="description-img">
                    </div>
                    
                    <div class="d1">
                        <p>Share</p>
                    </div>
                </div>
            </div>
            <div class="details-sep">
                <div class="desc-box" id="descBox">
                        <button class="desc-x" onclick="closeDescription()">x</button>
                        <label for="text" class="desc">${findProduct.desc}</label>
                    </div>
            </div>
        </div>
            `
        })
    
    }
    showDetailsProduct()

    window.addEventListener("load", () => {
    updateCartBtn();
})