const value = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');


let counterValue = 0;

buttonMinus.addEventListener('click', onMinus);
buttonPlus.addEventListener('click', onPlus)



function onMinus(e){
    counterValue -= 1;
    value.textContent = counterValue;
}

function onPlus(e){
    counterValue += 1;
    value.textContent = counterValue;
}
