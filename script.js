const rangeRed = document.getElementById("range-red");
const rangeGreen = document.getElementById("range-green");
const rangeBlue = document.getElementById("range-blue");
const polaroid = document.getElementById("polaroid");
const background = document.getElementById("background");
const valueDisplay = document.getElementById("value-display");
const btnRandomClr = document.getElementById("random-clr");

function changeColor(hexCode) {
  let red = rangeRed.value;
  let green = rangeGreen.value;
  let blue = rangeBlue.value;

  polaroid.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  background.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, 0.5)`;

  //valueDisplay.innerText = hexCode;
  valueDisplay.innerText = `rgb(${red}, ${green}, ${blue})`;
}

function randomClr() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      rangeRed.value = data.rgb.r;
      rangeGreen.value = data.rgb.g;
      rangeBlue.value = data.rgb.b;

      changeColor(data.color);
    });
}

rangeRed.addEventListener("input", changeColor);
rangeGreen.addEventListener("input", changeColor);
rangeBlue.addEventListener("input", changeColor);
btnRandomClr.addEventListener("click", randomClr);

randomClr();
