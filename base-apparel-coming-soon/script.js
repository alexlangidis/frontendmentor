const btnSubmit = document.getElementById('btnSubmit');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const input = document.querySelector('input');



btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    clearError();
    const emailValue = email.value;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (emailValue === '' || !emailValue.match(pattern)) {
        addError(emailError, 'Please provide a valid email')
        input.classList.add('error')
    } else {
        successFun();
    }

})


function addError(field, message){
    field.innerText = message;
}

function clearError(){
    emailError.innerText = '';
    input.classList.remove('success')
}

function successFun(){
    emailError.innerText = ''
    input.classList.remove('error')
    input.classList.add('success')
}