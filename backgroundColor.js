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
    return Math.trunc( Math.random() * colors.length)}

// the backgroundChanger for index

let indexcolor = [...colors,"linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)",
'linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%)',
'linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'];
 var color = document.querySelector('.color')
function index() {
    let randomNumberIndex = Math.trunc( Math.random() * indexcolor.length );
    console.log(randomNumberIndex)
    document.body.style.background = indexcolor[randomNumberIndex];
    color.innerHTML = indexcolor[randomNumberIndex]
}

// the backgroundChanger for Hex

let hexcolor = [...indexcolor, 'linear-gradient(#e66465, #9198e5)',
                'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)',
                'linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)', ];
var color = document.querySelector('.color');
let btnhex = document.querySelector('.btn-hex');
btnhex.addEventListener('click', () => {
   let randomNumberHex =Math.trunc( Math.random() * hexcolor.length );
   document.body.style.background = hexcolor[randomNumberHex];
   color.innerHTML = hexcolor[randomNumberHex]
})



// }
//             //

// // the backkgroundColor changer for index

 

//  let indexbtn = document.querySelector('.btn-index');
// var color = document.querySelector('.color');
     
// function index() {
// 
// let element = Math.ceil(Math.random() *colorsIndex.length)
// document.body.style.background = colorsIndex[element]


// // if (colorsIndex[element].length < 12) {
// //    console.log(colorsIndex[element].length) 
// // }
// // else {
// //     document.body.style.background = colorsIndex[element]

// // }
// // // console.log(colorsIndex)
// // for (let i = 0; i < colorsIndex.length; i++) {
// //     // const element = colorsIndex[i];

// //     // console.log(element[]) 

    
// // }

// }
