


const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subResult.textContent = `you are subscribed!`;
    }
    else{
        subResult.textContent = `you are  NOT subscribed!`;
    }
      
    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with Visa`
    }
    else if(masterCardBtn.checked){
         paymentResult.textContent = `you are paying with masterCard`
    }
    else if(payPalBtn.checked){
         paymentResult.textContent = `you are paying with payPal`
    }
    else(
        paymentResult.textContent = `you mast select a payment type`
    )
}