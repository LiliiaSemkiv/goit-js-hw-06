const form = document.querySelector('.login-form')

// console.log(form);

form.addEventListener('submit', onSubmit)

function onSubmit(event){
    event.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;

    if(emailInput.value === '' || passwordInput.value === ''){
        alert(`Всі поля повинні бути заповнені`)
    }else{
        const data = {
            email: emailInput.value,
            password: passwordInput.value,
        }
        console.log(data);
    };
    form.reset()

}