function openMenu(){
    document.getElementById("mySidenav").style.display = "flex";
}
function closeMenu(){
    document.getElementById("mySidenav").style.display = "none";
} 

const navlinkElm = document.querySelectorAll(".navItem")
navlinkElm.forEach((navlinkElm) => {
    navlinkElm.addEventListener('click', () =>{
        document.querySelector('.drop-Down')?.classList.remove('drop-Down')
        navlinkElm.classList.add('drop-Down')
    })
})
const dropExitElm = document.querySelectorAll(".closeBtn1")
dropExitElm.forEach((dropExitElm) => {
    dropExitElm.addEventListener('click', () =>{
        document.querySelector('.drop-Down')?.classList.remove('drop-Down')
        navlinkElm.classList.add('drop-Down')
    })
})   

// nav1

function navOpen(){
    document.getElementById("sideLink").style.display = "flex";
} 
function menuBack(){
    document.getElementById("sideLink").style.display = "none";
}

function navOpen1(){
    document.getElementById("sideLink1").style.display = "flex";
} 
function menuBack1(){
    document.getElementById("sideLink1").style.display = "none";
}

function navOpen2(){
    document.getElementById("sideLink2").style.display = "flex";
} 
function menuBack2(){
    document.getElementById("sideLink2").style.display = "none";
}

function navOpen4(){
    document.getElementById("sideLink4").style.display = "flex";
} 
function menuBack4(){
    document.getElementById("sideLink4").style.display = "none";
}

function navOpen6(){
    document.getElementById("sideLink6").style.display = "flex";
} 
function menuBack6(){
    document.getElementById("sideLink6").style.display = "none";
}

function navOpen7(){
    document.getElementById("sideLink7").style.display = "flex";
} 
function menuBack7(){
    document.getElementById("sideLink7").style.display = "none";
}


// Cart

function openCart(){
    document.getElementById("sideCart").style.display = "flex";
}
function backCart(){
    document.getElementById("sideCart").style.display = "none";
}


function openOrderedItem(){
    const div = document.getElementById("orderdContent")
    if(div.style.display === "flex"){
        div.style.display = "none";
    }else {
        div.style.display = "flex";
    }
}
function openOrderedItem1(){
    const div = document.getElementById("ordered-content1")
    if(div.style.display === "flex"){
        div.style.display = "none";
    }else {
        div.style.display = "flex";
    }
}
function openPaymentOption(optiontoShow){
    const payOption = document.querySelector('.payinfo')
    const payOption1 = document.querySelector('.payinfo1')
    const paydetails = document.querySelector('.paymentdetails')
    const paydetails1 = document.querySelector('.paymentdetails1')

    if(optiontoShow === 'payinfo'){
        payOption.style.display = "flex";
        paydetails.style.backgroundColor = " rgb(223, 255, 223)"
        payOption1.style.display = "none";
        paydetails1.style.backgroundColor = "white"
        paydetails1.style.border = "none"
    }else if(optiontoShow === 'payinfo1'){
        payOption.style.display = "none"
        paydetails.style.backgroundColor = "white"
        paydetails.style.border = "none";
        paydetails.style.border = "none";
        payOption1.style.display = "flex";
        paydetails1.style.backgroundColor = " rgb(223, 255, 223)";
    }
}

function changeTransfer(){
    document.getElementById("card").style.display = "none";
    document.getElementById("transfer").style.display = "flex";
    document.getElementById("payhead2").style.display = "none";
    document.getElementById("payoption1").style.color = "green";
    document.getElementById("payoption").style.color = "black";
}
function changeCard(){
    document.getElementById("card").style.display = "flex";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("payhead2").style.display = "none";
    document.getElementById("payoption").style.color = "green";
    document.getElementById("payoption1").style.color = "black";
}
function changeTransfer1(){
    document.getElementById("card").style.display = "none";
    document.getElementById("transfer").style.display = "flex";
    document.getElementById("payhead2").style.display = "none";
    document.getElementById("payoption3").style.display = "none";
    document.getElementById("payfieldcontainer").style.display = "flex";
}
function changeCard1(){
    document.getElementById("card").style.display = "flex";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("payhead2").style.display = "none";
    document.getElementById("payoption4").style.display = "none";
    document.getElementById("payfieldcontainer").style.display = "flex";
}
function changePayment(){
    document.getElementById("card").style.display = "none";
    document.getElementById("transfer").style.display = "none";
    document.getElementById("payoption3").style.display = "flex";
    document.getElementById("payoption4").style.display = "flex";
    document.getElementById("payfieldcontainer").style.display = "none";
}
function cancelpayment(){
    const cancelPayment = document.getElementById("cancelBtn")
    cancelPayment.addEventListener('click', ()=>{
        window.location.href = "./checkout.html"
    })
}
function openAccount(){
    const div = document.getElementById("Account")
    if(div.style.display === "flex"){
        div.style.display = "none";
    }else {
        div.style.display = "flex";
    }
}
function changeAccountMenu(){
    document.querySelector(".accountdetails-con").style.display = "flex";
    document.querySelector(".myAccount").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".orderdetailss-con").style.display = "none";
    document.querySelector(".myOrder").style.backgroundColor = "";
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".myInbox").style.backgroundColor = "";
    document.querySelector(".seedetails").style.display = "none";
    document.querySelector(".seehistory").style.display = "none";
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".myAccountManagement").style.backgroundColor = "";
    document.querySelector(".paymentsetting").style.display = "none";
    document.querySelector(".myPayment").style.backgroundColor = "";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".myAddress").style.backgroundColor = "";
    document.querySelector(".profileEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".addresseEdit").style.display = "none";
    document.querySelector(".addressdetails").style.display = "none";
}
function changeOrderMenu(){
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".myAccount").style.backgroundColor = "";
    document.querySelector(".orderdetailss-con").style.display = "flex";
    document.querySelector(".myOrder").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".myAddress").style.backgroundColor = "";
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".myInbox").style.backgroundColor = "";
    document.querySelector(".seedetails").style.display = "none";
    document.querySelector(".seehistory").style.display = "none";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".myAccountManagement").style.backgroundColor = "";
    document.querySelector(".paymentsetting").style.display = "none";
    document.querySelector(".myPayment").style.backgroundColor = "";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".profileEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".addresseEdit").style.display = "none";
    document.querySelector(".addressdetails").style.display = "none";
}
function openInboxMenu(){
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".myAccount").style.backgroundColor = "";
    document.querySelector(".orderdetailss-con").style.display = "none";
    document.querySelector(".myOrder").style.backgroundColor = "";
    document.querySelector(".inboxdetails").style.display = "flex";
    document.querySelector(".myInbox").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".myAddress").style.backgroundColor = "";
    document.querySelector(".seedetails").style.display = "none";
    document.querySelector(".seehistory").style.display = "none";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".myAccountManagement").style.backgroundColor = "";
    document.querySelector(".paymentsetting").style.display = "none";
    document.querySelector(".myPayment").style.backgroundColor = "";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".profileEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".addresseEdit").style.display = "none";
    document.querySelector(".addressdetails").style.display = "none";
}
function openAccountManagemntMenu(){
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".myAccount").style.backgroundColor = "";
    document.querySelector(".orderdetailss-con").style.display = "none";
    document.querySelector(".myOrder").style.backgroundColor = "";
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".myInbox").style.backgroundColor = "";
    document.querySelector(".seedetails").style.display = "none";
    document.querySelector(".seehistory").style.display = "none";
    document.querySelector(".managementdetails").style.display = "flex";
    document.querySelector(".myAccountManagement").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".accountmenu1").style.display = "flex";
    document.querySelector(".accountmenu").style.display = "none";
    document.querySelector(".myAddress").style.backgroundColor = "";
    document.querySelector(".myProfile").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".mySecurity").style.backgroundColor = "";
    document.querySelector(".paymentsetting").style.display = "none";
    document.querySelector(".myPayment").style.backgroundColor = "";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    document.querySelector(".addresseEdit").style.display = "none";
    document.querySelector(".addressdetails").style.display = "none";
}
function openPaymentMenu(){
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".myAccount").style.backgroundColor = "";
    document.querySelector(".orderdetailss-con").style.display = "none";
    document.querySelector(".myOrder").style.backgroundColor = "";
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".myInbox").style.backgroundColor = "";
    document.querySelector(".seedetails").style.display = "none";
    document.querySelector(".seehistory").style.display = "none";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".myAccountManagement").style.backgroundColor = "";
    document.querySelector(".myAddress").style.backgroundColor = "";
    document.querySelector(".myPayment").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".paymentsetting").style.display = "flex";
    document.querySelector(".addressdetails").style.display = "none";
    document.querySelector(".profileEdit").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".addresseEdit").style.display = "none";
    document.querySelector(".addressdetails").style.display = "none";
}
function openAddressMenu(){
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".myAccount").style.backgroundColor = "";
    document.querySelector(".orderdetailss  -con").style.display = "none";
    document.querySelector(".myOrder").style.backgroundColor = "";
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".myInbox").style.backgroundColor = "";
    document.querySelector(".seedetails").style.display = "none";
    document.querySelector(".seehistory").style.display = "none";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".myAccountManagement").style.backgroundColor = "";
    document.querySelector(".myPayment").style.backgroundColor = "";
    document.querySelector(".paymentsetting").style.display = "none";
    document.querySelector(".myAddress").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".addressdetails").style.display = "flex";
    document.querySelector(".addresseEdit").style.display = "none";
    document.querySelector(".profileEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "none";
}
function ongoing(){
    document.querySelector(".ongoing-info").style.display = "flex";
    document.querySelector(".canceled-info").style.display = "none";
    document.querySelector(".ongoing").style.color = "rgb(251, 181, 130)";
    document.querySelector(".ongoing").style.borderBottom = "1px solid rgba(247, 120, 30, 1)";
    document.querySelector(".ongoing").style.fontWeight = "700"
    document.querySelector(".canceled").style.borderBottom = "none";
    document.querySelector(".canceled").style.color = "black";
    document.querySelector(".canceled").style.fontWeight = "400"
}
function canceled(){
    document.querySelector(".canceled-info").style.display = "flex";
    document.querySelector(".ongoing-info").style.display = "none";
    document.querySelector(".canceled").style.color = "rgb(251, 181, 130)";
    document.querySelector(".canceled").style.fontWeight = "700"
    document.querySelector(".canceled").style.borderBottom = "1px solid rgba(247, 120, 30, 1)";
    document.querySelector(".ongoing").style.fontWeight = "400"
    document.querySelector(".ongoing").style.color = "black";
    document.querySelector(".ongoing").style.borderBottom = "none";
}
function seedetails(){
    document.querySelector(".orderdetailss-con").style.display = "none";
    document.querySelector(".seedetails").style.display = "flex";
    document.querySelector(".inboxdetails").style.display = "none";
    
}
function seeHistory(){
    document.querySelector(".seehistory").style.display = "flex";
    document.querySelector(".seedetails").style.display = "none";
    document.querySelector(".inboxdetails").style.display = "none";
    
}
function backseestatus(){
    document.querySelector(".seedetails").style.display = "flex";
    document.querySelector(".seehistory").style.display = "none";
    
}
function backMenu(){
    document.querySelector(".accountmenu").style.display = "flex";
    document.querySelector(".accountmenu1").style.display = "none";
    document.querySelector(".accountdetails-con").style.display = "flex";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".profileEdit").style.display = "none";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    document.querySelector(".myAccountManagement").style.backgroundColor = "";
    document.querySelector(".myAccount").style.backgroundColor = "rgb(251, 181, 130)";
    
}
function backInbox(){
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".accountdetails-con").style.display = "flex";
    document.querySelector(".myAccount").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".myInbox").style.backgroundColor = "";
    
}

function editProfile(){
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".profileEdit").style.display = "flex";
    document.querySelector(".accountdetails-con").style.display = "none";
    
}
function openSecurity(){
    document.querySelector(".securitydetails").style.display = "flex";
    document.querySelector(".mySecurity").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".myProfile").style.backgroundColor = "";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".profileEdit").style.display = "none";
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    
}
function openProfile(){
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".mySecurity").style.backgroundColor = "";
    document.querySelector(".myProfile").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".managementdetails").style.display = "flex";
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    
}
function editPassword(){
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".mySecurity").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".myProfile").style.backgroundColor = "";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "flex";
    document.querySelector(".pinEdit").style.display = "none";
}
function editPin(){
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".mySecurity").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".myProfile").style.backgroundColor = "";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "flex";
}
function editAddress(){
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".mySecurity").style.backgroundColor = "rgb(251, 181, 130)";
    document.querySelector(".myProfile").style.backgroundColor = "";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".accountdetails-con").style.display = "none";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
    document.querySelector(".addresseEdit").style.display = "flex";
    document.querySelector(".addressdetails").style.display = "none";
}
function backpass(){
    document.querySelector(".securitydetails").style.display = "flex";
    document.querySelector(".passwordEdit").style.display = "none";
    document.querySelector(".pinEdit").style.display = "none";
}
function backprofile(){
    document.querySelector(".managementdetails").style.display = "flex";
    document.querySelector(".profileEdit").style.display = "none";
    
}
function backorder1(){
    document.querySelector(".orderdetailss-con").style.display = "flex";
    document.querySelector(".seedetails").style.display = "none";
    
}
function backaddress(){
    document.querySelector(".addressdetails").style.display = "flex";
    document.querySelector(".addresseEdit").style.display = "none";
}
function deleteWarning(){
    document.querySelector(".managementdetails-con1").style.display = "flex";
}
function no(){
    document.querySelector(".managementdetails-con1").style.display = "none";
}

// PROFILE
function showOrderMenu(){
    document.querySelector(".accountmenuSize").style.display = "none";
    document.querySelector(".orderdetailss-con").style.display = "flex";
    document.querySelector(".accountdetails").style.display = "flex";
}
function showInboxMenu(){
    document.querySelector(".accountmenuSize").style.display = "none";
    document.querySelector(".inboxdetails").style.display = "flex";
    document.querySelector(".accountdetails").style.display = "flex";
}
function showAddressMenu(){
    document.querySelector(".accountmenuSize").style.display = "none";
    document.querySelector(".addressdetails").style.display = "flex";
    document.querySelector(".accountdetails").style.display = "flex";
}
function showAccountManagemntMenu(){
    document.querySelector(".accountmenuSize").style.display = "none";
    document.querySelector(".managementdetails").style.display = "flex";
    document.querySelector(".accountdetails").style.display = "flex";
}
function showSecurityMenu(){
    document.querySelector(".accountmenuSize").style.display = "none";
    document.querySelector(".securitydetails").style.display = "flex";
    document.querySelector(".accountdetails").style.display = "flex";
}
function showPaymentMenu(){
    document.querySelector(".accountmenuSize").style.display = "none";
    document.querySelector(".paymentsetting").style.display = "flex";
    document.querySelector(".accountdetails").style.display = "flex";
}
function backorder(){
    document.querySelector(".accountmenuSize").style.display = "flex";
    document.querySelector(".orderdetailss-con").style.display = "none";
    document.querySelector(".accountdetails").style.display = "none";
}
function backInbox1(){
    document.querySelector(".accountmenuSize").style.display = "flex";
    document.querySelector(".inboxdetails").style.display = "none";
    document.querySelector(".accountdetails").style.display = "none";
}
function backaddress1(){
    document.querySelector(".accountmenuSize").style.display = "flex";
    document.querySelector(".addressdetails").style.display = "none";
    document.querySelector(".accountdetails").style.display = "none";
}
function backprofile1(){
    document.querySelector(".accountmenuSize").style.display = "flex";
    document.querySelector(".managementdetails").style.display = "none";
    document.querySelector(".accountdetails").style.display = "none";
}
function backSecurity(){
    document.querySelector(".accountmenuSize").style.display = "flex";
    document.querySelector(".securitydetails").style.display = "none";
    document.querySelector(".accountdetails").style.display = "none";
}
function backPay(){
    document.querySelector(".accountmenuSize").style.display = "flex";
    document.querySelector(".paymentsetting").style.display = "none";
    document.querySelector(".accountdetails").style.display = "none";
}