console.log("Login functionality")
document.getElementById('login-btn')
.addEventListener('click', function(){
    // get the num input 
    const numberInput = document.getElementById('input-number')
    const contactNumber = numberInput.value;
    console.log(contactNumber);

const inputPin = document.getElementById('input-pin')
 const pin = inputPin.value;
 console.log(pin);

 if(contactNumber == '01234567890' && pin == '1234'){
    alert('login success');
 }
 else{
    alert('login failed');
    return;
 }
})