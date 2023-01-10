const emailError = document.getElementById('email-error');
const btn = document.getElementById('btn');
const email = document.getElementById('email');
const input = document.querySelector('input');


btn.addEventListener('click', e => {
    e.preventDefault();
    clearErrors();
    
    const emailValue = email.value;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (emailValue === "") {
        addError(emailError, "Email cannot be empty");           
    }  
    else if (!emailValue.match(pattern)){
        addError(emailError, "Looks like not an email");
    }   
    else {
        input.classList.add('success');
        
    }

})


function addError(field, message){
    field.innerText = message;
    
}



function clearErrors(){
    emailError.innerText = "";
    input.classList.remove('success');
    input.classList.add('error');
}
