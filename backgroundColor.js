let colors = ['yellow','green','deepskyblue','red','gold','acqua','pink','black','blue'];
const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
 const randomNumber = getrandomNumber();
 console.log(randomNumber)
 document.body.style.backgroundColor = colors[randomNumber];
 color.innerHTML = colors[randomNumber]
})

function getrandomNumber() {
    return Math.trunc( Math.random() * colors.length)
}