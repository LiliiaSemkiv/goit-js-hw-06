const validationInput = document.querySelector('#validation-input')
const validLength = validationInput.dataset.length;

validationInput.addEventListener('blur', onInput)


function onInput(e){
if(e.currentTarget.value.length === Number(validLength)){

    validationInput.classList.add("valid")
    validationInput.classList.remove("invalid")
}else{
    validationInput.classList.remove("valid")
    validationInput.classList.add("invalid")
}
}
