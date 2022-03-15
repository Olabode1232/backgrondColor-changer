let colors = ['yellow','green','deepskyblue','red','gold','black'];
var color = document.querySelector('.color');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
 let randomNumber = getrandomNumber();
//  console.log(randomNumber)
 document.body.style.backgroundColor = colors[randomNumber];
 color.innerHTML = colors[randomNumber]
})

function getrandomNumber() {
    return Math.trunc( Math.random() * colors.length)
}
            // linear-gradient(#e66465, #9198e5);
            // linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
            // linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);  

// the backkgroundColor changer for index

 

 let indexbtn = document.querySelector('.btn-index');
     
function index() {
let colorsIndex = [...colors,"linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)",
'linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%)',
'linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'];
let element = Math.ceil(Math.random() *colorsIndex.length)
document.body.style.background = colorsIndex[element]

// if (colorsIndex[element].length < 12) {
//    console.log(colorsIndex[element].length) 
// }
// else {
//     document.body.style.background = colorsIndex[element]

// }
// // console.log(colorsIndex)
// for (let i = 0; i < colorsIndex.length; i++) {
//     // const element = colorsIndex[i];

//     // console.log(element[]) 

    
// }

}