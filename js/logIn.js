// Step-1: add click event handler to be submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    //step-2:get the email address inside the email input field
    //always remember use .value to get text from an input field
    const emailField=document.getElementById('user-email');
    const email=emailField.value;

    // step-3:get password
    // 3.a: set  id on the html element
    //3.b: get the element
    //3.c: get the value from the element
    const passField=document.getElementById('user-pass');
    const pass=passField.value;

    //step-4: verify email and password 
    if(email=='borolokBaperGoribBeti@gmail.com' && pass=='12345'){
       window.location.href='bank.html';
    }
    else{
        console.log('invalid user')
    }
})