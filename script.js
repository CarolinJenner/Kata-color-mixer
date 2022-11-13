const rangeRed = document.getElementById('range-red');
const rangeGreen = document.getElementById('range-green');
const rangeBlue = document.getElementById('range-blue');
const background = document.getElementById('background');
const valueDisplay = document.getElementById('value-display');


function changeColor() {
    let red = rangeRed.value;
    let green = rangeGreen.value;
    let blue = rangeBlue.value;

console.log(valueDisplay);
background.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
valueDisplay.innerText = `rgb(${red}, ${green}, ${blue})`;

}

rangeRed.addEventListener("input", changeColor);
rangeGreen.addEventListener("input", changeColor);
rangeBlue.addEventListener("input", changeColor);