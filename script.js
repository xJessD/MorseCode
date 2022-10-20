import * as funct from './modules/functions.js';

// // Dictionary of swapped values. 
// const morseDict = {};
// for ( const [key, value] of Object.entries(dict)) {
//   morseDict[value] = key;
// }

// Get input & output elements
const input = document.getElementById("input");
const output = document.getElementById("output");

// RegEx to match morse code
// const regex = /^[.-]{1,5}(?:[ \t]+[.-]{1,5})*(?:[ \t]+[.-]{1,5}(?:[ \t]+[.-]{1,5})*)*$/;
const regex =/(\.|\-)\.|(\.|\-)\-/i;


input.addEventListener("input", () => {
  const text = input.value;
  funct.translate(text, output, regex)});

output.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
});

// Tester
// .- .--. .--. .-.. ./.--. .. . 
// -- -.-- / -. .- -- . / .. ... / .--- . ... ... /


