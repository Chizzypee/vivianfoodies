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
    
function dropOpen2(){
    document.getElementById("dropDown2").style.display = "flex";
}      
function dropExit2(){
    document.getElementById("dropDown2").style.display = "none";
}    
function dropOpen3(){
    document.getElementById("dropDown3").style.display = "flex";
}      
function dropExit3(){
    document.getElementById("dropDown3").style.display = "none";
}    
function dropOpen4(){
    document.getElementById("dropDown4").style.display = "flex";
}      
function dropExit4(){
    document.getElementById("dropDown4").style.display = "none";
}    
function dropOpen5(){
    document.getElementById("dropDown5").style.display = "flex";
}      
function dropExit5(){
    document.getElementById("dropDown5").style.display = "none";
}    
function dropOpen6(){
    document.getElementById("dropDown6").style.display = "flex";
}      
function dropExit6(){
    document.getElementById("dropDown6").style.display = "none";
}    
function dropOpen7(){
    document.getElementById("dropDown7").style.display = "flex";
}      
function dropExit7(){
    document.getElementById("dropDown7").style.display = "none";
}    
function dropOpen8(){
    document.getElementById("dropDown8").style.display = "flex";
}      
function dropExit8(){
    document.getElementById("dropDown8").style.display = "none";
}    
function dropOpen9(){
    document.getElementById("dropDown9").style.display = "flex";
}      
function dropExit9(){
    document.getElementById("dropDown9").style.display = "none";
}    

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

function navOpen3(){
    document.getElementById("sideLink3").style.display = "flex";
} 
function menuBack3(){
    document.getElementById("sideLink3").style.display = "none";
}

function navOpen4(){
    document.getElementById("sideLink1").style.display = "flex";
} 
function menuBack4(){
    document.getElementById("sideLink4").style.display = "none";
}

function navOpen5(){
    document.getElementById("sideLink5").style.display = "flex";
} 
function menuBack5(){
    document.getElementById("sideLink5").style.display = "none";
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

function navOpen8(){
    document.getElementById("sideLink8").style.display = "flex";
} 
function menuBack8(){
    document.getElementById("sideLink8").style.display = "none";
}

function navOpen9(){
    document.getElementById("sideLink9").style.display = "flex";
} 
function menuBack9(){
    document.getElementById("sideLink9").style.display = "none";
}

function navOpen10(){
    document.getElementById("sideLink10").style.display = "flex";
} 
function menuBack10(){
    document.getElementById("sideLink10").style.display = "none";
}

function navOpen11(){
    document.getElementById("sideLink11").style.display = "flex";
} 
function menuBack11(){
    document.getElementById("sideLink11").style.display = "none";
}

// Cart

function openCart(){
    document.getElementById("sideCart").style.display = "flex";
}
function backCart(){
    document.getElementById("sideCart").style.display = "none";
}

// ADDRESS
function openNewAddress(){
    document.getElementById("newAddress").style.display = "flex";
}
function openEditAddress(){
    document.getElementById("editAddress").style.display = "flex";
}
function closeEditAddress(){
    document.getElementById("editAddress").style.display = "none";
}
function cartOpen(){
    document.getElementById("counting").style.display = "flex";
    document.getElementById("cart").style.display = "none";
}

function openDescription(){
    document.getElementById("descBox").style.display = "flex";
}
function closeDescription(){
    document.getElementById("descBox").style.display = "none";
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