const validationInput = document.querySelector('#validation-input')
const validLength = validationInput.dataset.length;

validationInput.addEventListener('blur', onInput)


function onInput(e){
if(e.currentTarget.value.length === Number(validLength)){

    validationInput.style.borderColor = '#4caf50'
    return
}
validationInput.style.borderColor = '#f44336'

}
