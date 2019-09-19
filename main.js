let math = '';
let display = document.getElementById('display');
const equal = document.getElementById('equal');

let nums = document.querySelectorAll('.num');
for (let num of nums) {
    num.addEventListener('click', function () {
        display.value += num.textContent;
        math += num.textContent;
        }
    )
};

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

const clear = document.getElementById('clear');
clear.addEventListener('click', function() {
    // let random = getRandomInt(4);
    math = '';
    display.value = '';
    // if (random === 0) {
    //     display.value = 'You can add some values now';
    // } else if (random === 1) {
    //     display.value = 'There could be numbers here, if you so please';
    // } else if (random === 2) {
    //     display.value = "What if numbers were here";
    // } else if (random === 3) {
    //     display.value = "When you want numbers but they keep clearin'";
    // }
    // BE FUNNY LATER
});

equal.addEventListener('click', function() {
    let answer = eval(math);
    display.value = answer;
    math = '';
});

const blue = document.getElementById('blue-shades');
const green = document.getElementById("green-shades");
const red = document.getElementById('red-shades');
const brown = document.getElementById('brown-shades');
// The idea is to make it to where it changes, darkgreen/lightgreen into different shades
// .darkgreen {
//     background - color: #808080;
// }

// .lightgreen {
//     background - color: rgb(143, 191, 127);
// }
// .clear {
//     grid - area: clear;
//     background - color: #3895D3;
// }
// let darkgreen = querySelectorAll('darkgreen');
// let lightgreen = querySelectorAll('lightgreen');
// let clearer = getElementById('clear');

function changeBGColor(classs, color) {
    let cols = document.getElementsByClassName(classs);
    for (let i = 0; i < cols.length; i++) {
        cols[i].style.backgroundColor = color;
    }
}

green.addEventListener('click', function() {
    changeBGColor('darkgreen', 'ForestGreen');
    changeBGColor('lightgreen', 'PaleGreen');
    
});

blue.addEventListener('click', function() {
    changeBGColor('darkgreen', 'MediumBlue');
    changeBGColor('lightgreen', 'SteelBlue');
});

red.addEventListener('click', function() {
    changeBGColor('darkgreen', 'DarkRed');
    changeBGColor('lightgreen', 'LightCoral');
});

brown.addEventListener('click', function() {
    changeBGColor('darkgreen', 'SaddleBrown');
    changeBGColor('lightgreen', 'Sienna');
});