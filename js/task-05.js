const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output')


console.log(nameInput);
console.log(nameOutput);

nameInput.addEventListener('input', onInput);

function onInput(){
    const name = nameInput.value;
    nameOutput.textContent = name !== '' ? name : `Anonymous`
}