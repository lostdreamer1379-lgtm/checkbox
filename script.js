const wantToPay=document.getElementById("pay");
const cashPayment=document.getElementById("Cash");
const cardPayment=document.getElementById("Card");
const visaBtn=document.getElementById("visa");
const mastercardBtn=document.getElementById("mastercard");
const amexBtn=document.getElementById("Amex");
const submit=document.getElementById("submitBtn");
const paymentResult=document.getElementById("payresult");
const cardResult=document.getElementById("result");

submit.onclick=function(){
    if(!wantToPay.checked){
        paymentResult.textContent= "u broke";
        cardResult.textContent= "you don't have a card or cash";
    }else if(cashPayment.checked){
        paymentResult.textContent= "You chose to pay with cash";
        cardResult.textContent= "u have not selected a payment method";
    }else if(!cardPayment.checked){
        paymentResult.textContent= "Please select a payment method";
        cardResult.textContent= "Please select a payment method";
    }else if(visaBtn.checked){
        paymentResult.textContent= "u choose to pay with a card";
        cardResult.textContent= "Visa selected";
    }else if(mastercardBtn.checked){
        paymentResult.textContent= "u choose to pay with a card";
        cardResult.textContent= "Mastercard selected";
    }else if(amexBtn.checked){
        paymentResult.textContent= "u choose to pay with a card";
        cardResult.textContent= "American Express selected";
    }else{
        paymentResult.textContent= "u choose to pay with card";
        cardResult.textContent= "Please select a card type";
    }
}
