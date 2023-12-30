const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',function(e){
    e.preventDefault(); 
    if(username.value === "") {
       error(username,'Please Enter Your Username');
    }
    else {
        success(username);
    }
    if(email.value === "") {
        error(email,'Please Enter Your Email');
     }
     else {
         success(email);
     }
     if(password1.value === "") {
        error(password1,'Please Enter Your Password');
     }
     else {
         success(password1);
     }
     if(password2.value === "") {
        error(password2,'Please Confirm Your Password');
     }
     else if (password2.value != password1.value){
        error(password2,'Password is incorrect');
     }
     else {
         success(password2);
     }
     checkLength(username);
     checkLength(password1);
});

function error(input,message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.textContent = message;
}

function success(input){
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
};

function getInputCase(input) {
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

function checkLength(input){
    if(input.value.length < 5){
        error(input,`${getInputCase(input)} Must be between 5-10`)
    }
    else if (input.value.length>10){
        error(input,`${getInputCase(input)} Must be between 5-10`)
    }
    else {
        success(input)
    }
}





