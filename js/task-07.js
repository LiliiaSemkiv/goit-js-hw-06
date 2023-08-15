const fontSizeControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

// console.log(fontSizeControl);

fontSizeControl.addEventListener('input', onInput)

function onInput(){
    const fontSize = fontSizeControl.value + 'px'
    text.style.fontSize = fontSize
}