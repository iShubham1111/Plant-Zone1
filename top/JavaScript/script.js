//email content 8

function isvalidEmail(email) {
    const emailPattern= /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;
    return emailPattern.test(email);
}
function validateEmailInput() {
    const emailInput= document.getElementById('email');
    const errorMessage= document.getElementById('error-message');
    const emailValue= emailInput.value.trim();

    if(emailValue===''){
        errorMessage.textContent='email feild cannot be empty'
        errorMessage.className='error'
    }else if(!isvalidEmail(emailValue)){
          errorMessage.textContent='invalid email format, please enter a valid email'
    }else{
        errorMessage.textContent='Email looks good!!'
        errorMessage.className='Valid'
    }

    function validateEmailForm(event) {
        const errorMessage= document.getElementById('error-message');

        if(errorMessage.className==='error'){
            event.preventDefault();
        }
    }
       

}
// ----------------------------------------------------------------------------------

//darkmode - lightmode --------------

// const body = document.querySelector('#nav_mode');

// // Dark mode button
// const dark_mode = document.getElementById('darkmode');
// dark_mode.addEventListener('click', function() {
//     body.classList.add('dark_mode');
//     body.classList.remove('light_mode');
// });

// // Light mode button
// const light_mode = document.getElementById('lightmode');
// light_mode.addEventListener('click', function() {
//     body.classList.add('light_mode');
//     body.classList.remove('dark_mode');
// });
