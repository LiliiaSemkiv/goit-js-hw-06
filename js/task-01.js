// const ul = document.querySelector('categories');
// // const li = document.querySelector('item');
// const title = document.querySelector('h2').textContent
// console.log(`Category: ${title}`);

// // console.dir(title);
// // console.dir(ul);
// // console.dir(li);
// console.dir(`Number of categories: ${ul.length}`);


// const list = document.querySelectorAll("ul#categories .item ul")
// const arr = [];

// list.forEach((el) => {
//     arr.push(
//         `Category: ${title} Elements: ${el.children.length}`
//     )
// })

// console.log(arr);

// // console.log(`Category:`);






const ul = document.getElementById('categories');
const li = document.querySelectorAll('.item');


// console.dir(ul);
// console.dir(li);
console.log(`Number of categories: ${li.length}`);

li.forEach((el) => {
    const title = el.firstElementChild('h2').textContent;


// console.log(title);

    const elements = el.lastElementChild('ul li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements.length}`);
})
