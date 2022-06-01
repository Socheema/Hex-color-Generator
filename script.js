//Selecting elements from html

// let body = document.querySelector('body')
// let button = document.querySelector('button')
// let hexcode = document.querySelector('span')
// console.log(button)

// let arrayOfColor = ["red", "green", "blue"]
// button.addEventListener("click", function(){
//     for (let i = 0; i < arrayOfColor.length; i++){
//         let bar  = Math.floor(Math.random() *3)
//         console.log(bar)
//         body.style.backgroundColor = arrayOfColor[bar]
//         hexcode.innerHTML = arrayOfColor[bar]
//     }
// })


let body = document.querySelector("body");
let button = document.querySelector("button");
let hexcode = document.querySelector("span");

let arrayOfColor = ['1', '2', '3', '4', '5', '6','7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
button.addEventListener('click', runEvent)
function runEvent (){
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        let bar = Math.floor(Math.random() * arrayOfColor.length);
        hexColor += arrayOfColor[bar]
        body.style.backgroundColor = hexColor
        hexcode.innerHTML = hexColor
        
    }
    

}



