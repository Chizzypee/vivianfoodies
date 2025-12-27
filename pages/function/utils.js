const register = async (e) =>{
    try {
        // e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(!username || username === ""){
        throw new Error("Enter username")
    }else if(!email || email === ""){
        throw new Error("Enter email")
    }else if(!password || password === "" || password.length <=3){
        throw new Error("password should be 4 characters short")
    }else if(password !== confirm){
        throw new Error("password mismatched")
    }
        const info = {
            username,
            email,
            password,
            loggedIn: false,
            checkbox: false,
        };

        const url = `${baseUrl}${routes.register}`;
        console.log("URL is:", url);
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(info),
        });
        console.log('here',res);
        const result = await res.json();
        if(!res.ok){
            throw new Error(result.error)
        }
             window.location.href = ("./loarder.html");
    } catch (error) { 
       alert(error)
       console.log(error); 
    }
}
const login = async (e) =>{
    try {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        if(!email){
            throw new Error("Enter email")
        }else if(email === ""){
            throw new Error("email is invalid")
        }else if(!password){
            throw new Error("Enter password")
        }else if(password === ""){
            throw new Error("invalid password")
        }else if(password.length <3){
            throw new Error("password should have 4 character above")
        }

            const info = {
                email,
                password,
            }

            const url = `${baseUrl}${routes.login}`
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(info),
            });
            const result = await res.json(); 
            if(!res.ok){
                throw new Error(result.error);  
            }
            if(result.user)
                localStorage.setItem("userId", result.user.userId || "")
                localStorage.setItem("username", result.user.username || "")
                localStorage.setItem("email", result.user.email || "")
            if(result.accessTokeen)
                localStorage.setItem("accessToken", result.accessTokeen)
            if(result.refreshToken)
                localStorage.setItem("refreshToken", result.refreshToken)
            console.log("Login successful", result);
                window.location.href = "../dashboard/dashboard.html"
    } catch (error) {
        alert(error);
        console.log(error);
    }
}


const profileForm = document.getElementById("profileEdit-form")
const adressForm = document.getElementById("addressForm")

profileForm.addEventListener('submit', async (e) => {
        try {
    e.preventDefault()
    const userId = localStorage.getItem("userId")
     if(!userId) throw new Error("No userId found in localstorage")

         // Get existing profile first
         let oldProfile = null;
         try {
            oldProfile = await getProfile(true)
         } catch (error) {
            oldProfile = {}
         }
        //  const oldProfile = await getProfile(true); // returns data only
         
    const firstname = document.getElementById("pro-firstname").value;
    const middlename = document.getElementById("pro-middlename").value;
    const surename = document.getElementById("pro-surename").value;
    const email = document.getElementById("pro-email").value;
    const gender = document.getElementById("pro-gender").value;
    const birthdate = document.getElementById("pro-birthdate").value;
    const phone = document.getElementById("pro-phone").value;

    //  Only update fields that are non-empty, otherwise keep old values
        const userData = {
            userId,
            firstname:  firstname  || oldProfile.firstname || "",
            middlename: middlename || oldProfile.middlename || "",
            surename:   surename   || oldProfile.surename || "",
            email:      email      || oldProfile.email || "",
            gender:     gender     || oldProfile.gender || "",
            birthdate:  birthdate  || oldProfile.birthdate || "",
            phone:      phone      || oldProfile.phone || ""
        };

     const url = `${baseUrl}${routes.updateProfile}/${userId}`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();
        if(!res.ok){
            throw new Error(result.msg || "update failed")
        }
        localStorage.setItem("profile", JSON.stringify(result.data))
        alert("profile saved successfully")
        getProfile()
       
    } catch (error) {
        alert(error)
    }
});

adressForm.addEventListener('submit', async (e) => {
        try {
    e.preventDefault()
    const userId = localStorage.getItem("userId")
     if(!userId) throw new Error("No userId found in localstorage")

         // Get existing profile first
         let oldProfile = null;
         try {
            oldProfile = await getAddress(true)
         } catch (error) {
            oldProfile = {}
         }
         
    const addFirstname = document.getElementById("add-firstname").value;
    const lastname = document.getElementById("add-lastname").value;
    const phone = document.getElementById("add-phone").value;
    const addPhone = document.getElementById("add-phone1").value;
    const address = document.getElementById("add-address").value;
    const address1 = document.getElementById("add-address1").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;

    //  Only update fields that are non-empty, otherwise keep old values
        const userData = {
            userId,
            addFirstname:  addFirstname  || oldProfile.addFirstname || "",
            lastname: lastname || oldProfile.lastname || "",
            phone:      phone      || oldProfile.phone || "",
            addPhone:      addPhone      || oldProfile.addPhone || "",
            deliveyAddress:     address     || oldProfile.deliveyAddress || "",
            additionalInformation:  address1  || oldProfile.additionalInformation || "",
            country:  country  || oldProfile.country || "",
            city:  city  || oldProfile.city || "",
        };
     const url = `${baseUrl}${routes.updateAddress}/${userId}`;
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();
        if(!res.ok){
            throw new Error(result.msg || "update failed")
        }
        localStorage.setItem("Address", JSON.stringify(result.data));
        alert("Address saved successfully")
        getAddress()
    } catch (error) {
        alert(error)
    }
});

window.addEventListener("load", async() => {
    const userId = localStorage.getItem("userId")
    if(!userId){
        console.log("No userId in localstorage")
        return;
    }
    console.log("user ID found on load:", userId);
    getAddress()
    getProfile() 
    getOrder()

})

async function getProfile(returnOnlyData = false) {
    const userId = localStorage.getItem("userId");
    const url = `${baseUrl}${routes.getProfile}/${userId}`;
    const res = await fetch(url);
    const result = await res.json();
    if (!res.ok) throw new Error(result.error);
    if (returnOnlyData) return result.data;  // <-- THIS FIXES YOUR ISSUE
    // Otherwise update the UI normally
    document.getElementById("displayPro-firstname").innerText = result.data.firstname;
    document.getElementById("displayAccount-firstname").innerText = result.data.firstname;
    document.getElementById("displayHeadName").innerText = result.data.firstname;
    document.getElementById("displayPro-middlename").innerText = result.data.middlename
    document.getElementById("displayPro-surename").innerText = result.data.surename
    document.getElementById("displayPro-email").innerText = result.data.email
    document.getElementById("displayPro-gender").innerText = result.data.gender
    document.getElementById("displayPro-birthdate").innerText = result.data.birthdate
    document.getElementById("displayPro-phone").innerText = result.data.phone
    document.getElementById("displayAccount-surename").innerText = result.data.surename
    document.getElementById("displayAccount-email").innerText = result.data.email
    document.getElementById("displayHeadEmail").innerText = result.data.email
}
async function getAddress(returnOnlyData = false) {
    const userId = localStorage.getItem("userId");
    const url = `${baseUrl}${routes.getAddress}/${userId}`;
    const res = await fetch(url);
    const result = await res.json();
    if (!res.ok) throw new Error(result.error);
    if (returnOnlyData) return result.data;  // <-- THIS FIXES YOUR ISSUE
    // Otherwise update the UI normally
    document.getElementById("displayAddress-firstname").innerText = result.data.addFirstname;
    document.getElementById("displayAddress-lastname").innerText = result.data.lastname;
    document.getElementById("displayAddress-phone").innerText = result.data.phone;
    document.getElementById("displayAddress-phone1").innerText = result.data.addPhone;
    document.getElementById("displayAddress-address").innerText = result.data.deliveyAddress;
    document.getElementById("displayAddress-address1").innerText = result.data.additionalInformation;
    document.getElementById("displayAdd-firstname").innerText = result.data.addFirstname;
    document.getElementById("displayAdd-lastname").innerText = result.data.lastname;
    document.getElementById("displayAdd-phone").innerText = result.data.phone;
    document.getElementById("displayAdd-phone1").innerText = result.data.addPhone;
    document.getElementById("displayAdd-address").innerText = result.data.deliveyAddress;
    document.getElementById("displayAdd-address1").innerText = result.data.additionalInformation;
}


async function getOrder() {
    const userId = localStorage.getItem("userId");
    const url = `${baseUrl}${routes.getOrder}/${userId}`;
    const res = await fetch(url);
    const result = await res.json();
    console.log(result, "order infomation here");
    if (!res.ok) throw new Error(result.error);
    window.orders = result.data
    const container = document.getElementById("orderContainer")
    container.innerHTML = "";
    window.orders.forEach((order, orderIndex) =>{
        const itemsArray = Array.isArray(order.items)? order.items : Object.values(order.items || {}) ;
                itemsArray.forEach((item, itemIndex) => {
                    container.innerHTML += `
                <div class="ongoingdetails" id="orderContainer">
                        <img src="${item.imgSrc}"  class="ongoingorderIMG">
                        <div class="goingcol">
                            <div class="ongoingrol">
                                <div class="goingrol-seedetails">
                                    <label for="text" class="goingname" id="order-name">${item.name}</label>
                                    <label for="text" class="seemorebtn1" onclick="getOrderDetails(${orderIndex}, ${itemIndex})">See details</label>
                                </div>
                            </div>
                            <div class="ordernumber">
                                    <label for="text" class="goingdesc" id="order-description">${item.description}</label>
                            </div>
                            <div class="ordernumber">
                                <label for="text" class="order-numb" id="confirmation-number">${order.reference}</label>
                            </div>
                            <div class="ordernumber">
                                <label for="text" class="delieveredbtn">${order.status}</label>
                            </div>
                            <div class="goingdate">
                                <label for="date" class="going-date" id="order-date">${new Date(order.createdAt).toLocaleString()}</label>
                            </div>
                        </div>
                    </div>
                `;

                })
    })
}

function getOrderDetails(orderIndex, itemIndex){
    const order = window.orders[orderIndex];
    if(!order) return;
    document.querySelector(".orderdetailss-con").style.display = "none";
    document.querySelector(".seedetails").style.display = "flex";
    document.querySelector(".inboxdetails").style.display = "none";
    containerSeemore = document.getElementById("seeDetailscon")
    containerSeemore.innerHTML  = "";
    const items = Array.isArray(order.items)? order.items : Object.values(order.items || {}) ;
    const delivery = Array.isArray(order.delivery)? order.delivery : Object.values(order.delivery || {}) ;
    const item = items[itemIndex];
    if(!item) return;
    containerSeemore.innerHTML =
    `
            <div class="seeorderdetailshead" onclick="backorder1()">
                <i class="fa-solid fa-angle-left backorderIMG"></i>
                <p>Order details</p>
            </div>
            <div class="seeorderdetailshead1" onclick="backorder1()">
                <i class="fa-solid fa-angle-left backorderIMG" style="color: #ffffff;"></i>
                <p>Order details</p>
            </div>
            <div class="seedetails-head">
                <div class="seerol">
                    <label for="text" class="seeordertext">Order</label>
                    <label for="text" class="seeordernnumb" id="displayRandomNumber">${order.reference}</label>
                </div>
                <div class="seerol">
                    <label for="text" class="seetotalitem" id="quantity1">${item.quantity}</label>
                    <label for="text" class="seeitemtext">Item</label>
                </div>
                <div class="seerol">    
                    <label for="text" class="seeplacetext">placed on</label>
                    <label for="text" class="seeplaceddate" id="order-date">${new Date(order.createdAt).toLocaleString()}</label>
                </div>
                <div class="seerol">
                    <label for="text" class="seetotaltext">Total: Ron</label>
                    <label for="text" class="seetotalamount" id="totalAmount">${item.price}</label>
                </div>
            </div>
            <div class="seedetails-items" >
                <div class="seedetails-items-h">
                    <p>ITEM IN YOUR CART</p>
                </div>
                <div class="seeongoingdetails" id="seedetailsCon">
                    <div class="seeongoingdetails-con">
                        <div class="seeongoingdetails-up">
                            <div class="goingdelivered">
                                <label for="text" class="delieveredbtn" id="status">${order.status}</label>
                                <label for="text" class="nonrefundable">NON-REFUNNDABLE</label>
                            </div>
                            <div class="seegoingdate">
                                <label for="date" class="going-date" id="order-date">${new Date(order.createdAt).toLocaleString()}</label>
                            </div>
                        </div>
                        <div class="seeongoingrol">
                            <div class="seegoingcolimg">
                                <img src="${item.imgSrc}" class="seeongoingorderIMG" id="seeongoingorderIMG">
                            </div>
                            <div class="seegoingcol">
                                <div class="ordernumber">
                                    <label for="text" class="goingname" id="order-name">${item.description}</label>
                                </div>
                                <div class="ordernumber">
                                    <label for="text" class="order-numb">QTY:</label>
                                    <label for="text" class="order-numb">${item.quantity}</label>
                                </div>
                                <div class="ordernumber">
                                    <label for="text" class="seeprice" id="totalAmount1">RON ${item.price}</label>
                                </div>
                                <div class="ordernumber">
                                    <label for="text" class="seemorebtn" onclick="seeHistory()">See Status History</label>
                                </div>
                            </div>
                        </div>
                        <div class="seeongoingdetails-up">
                            <div class="seerol1">
                                <label for="date" class="seeRtnperiodtext"><i class="fa-solid fa-recycle refundIMg"></i>--The return period ended on</label>
                                <label for="text" class="seetdate">(02-11-2025)</label>
                                <label for="text" class="accessRtn">Access our Return Police</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accountdetailsinfo-rol">
                    <div class="seeaccountinfo">
                        <div class="accountinfohead">
                            <p>PAYMENT INFORMATION</p>
                        </div>
                        <div class="accountitem">
                            <div class="namerol">
                                <label for="text" class="seepayhead">Payment method</label>
                            </div>
                            <div class="namecol">
                                <label for="text" class="accountemail">Pay with Cards or Bank Transfer</label>
                            </div>
                        </div>
                        <div class="accountitem">
                            <div class="seepayhead">Payment Details</label>
                            </div>
                            <div class="namerol">
                                <label for="text" class="accountemail">items total:</label>
                                <label for="text" class="accountemail" id="quantity">${item.quantity}</label>
                            </div>
                            <div class="namerol">
                                <label for="text" class="accountemail">Delivery fee:</label>
                                <label for="text" class="accountemail" id="deliveryfee">RON ${item.deliveryfee}</label>
                            </div>
                            <div class="namerol">
                                <label for="text" class="accountemail">Total: RON</label>
                                <label for="text" class="accountemail" id="totalAmount2">${order.totalAmount}</label>
                            </div>
                        </div>
                    </div>
                    <div class="seeaccountinfo">
                        <div class="accountinfohead">
                            <p>DELIVERY INFORMATION</p>
                        </div>
                        <div class="accountitem">
                            <div class="namecol">
                                <label for="text" class="seepayhead">Delivery Method</label>
                                <label for="text" class="accountsurename">Pick-up station</label>
                            </div>
                            <div class="namecol">
                            </div>
                            <div class="namecol">
                                <label for="text" class="seepayhead">Pick-up Station Address</label>
                            </div>
                            <div class="namecol">
                                <label for="text" class="accountstate" id="address">${delivery[0].address}</label>
                                <label for="text" class="accountnumbe1" id="state">${delivery[0].city}</label>
                            </div>
                            <div class="namecol">
                                <label for="text" class="openinghurs">Opening Hours</label>
                                <label for="text" class="accountnumbe1">Mon-Fri 8 AM - 6PM; SAT 9 AM - 5PM</label>
                            </div>
                            <div class="namecol">
                                <label for="text" class="seelocation">See Location</label>
                            </div>
                            <div class="namecol">
                                <label for="text" class="seepayhead">Shipping Details</label>
                            </div>
                            <div class="namecol">
                                <label for="text" class="accountnumbe1">Pickup Station. Fulfilled by vivilious foodies</label>
                                <label for="text" class="accountnumbe1">Delivery between<span>25 December</span> and<span>26 December 26</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
    `
}