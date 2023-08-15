function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// const widget = document.querySelector('.widget')
const color = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color')


// console.log(widget);
// console.log(color);
// console.log(changeColor);

changeColorBtn.addEventListener('click', changeColor)

function changeColor(){
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}