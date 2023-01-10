const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const fnameError = document.getElementById('fname-error');
const lnameError = document.getElementById('lname-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();
    const firstName = fname.value.trim();
    const lastName = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    if (firstName === '') {
        addError(fnameError, "First name cannot be empty");
    }
    if (lastName === "") {
        addError(lnameError, "Last name cannot be empty");
    }
    if (emailValue === "") {
        addError(emailError, "Email cannot be empty");
    }  else if (!emailValue.match(pattern)){
        addError(emailError, "Looks like not an email");
    }
    if (passwordValue === "") {
        addError(passwordError, "Password cannot be empty");
    }
    if(!fnameError.innerText && !lnameError.innerText && !emailError.innerText && !passwordError.innerText){
        successFunction();
    }
});

function addError(field, message){
    field.innerText = message;
    fname.classList.add('error');
    lname.classList.add('error');
    email.classList.add('error');
    password.classList.add('error');
    field.classList.add('errorMsg');
}


function clearErrors(){
    fnameError.innerText = "";
    lnameError.innerText = "";
    emailError.innerText = "";
    passwordError.innerText = "";
}



function successFunction() {
    const input = document.querySelectorAll('input');

    input.forEach(element => {
        if (element.classList.contains('error')){
            element.classList.remove('error')
            element.classList.add('success')
        } else {
            fname.classList.add('success');
            lname.classList.add('success');
            email.classList.add('success');
            password.classList.add('success');
        }
    });
   
}
