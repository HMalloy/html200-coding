// codepen: https://codepen.io/HMalloy/pen/mdJMGaV

// Take a sentence of at least five words and a period.
// Make an array from that sentence and console.log the third word.

const sentence = "I ate too much ice cream.";

const arr = sentence.split(' ');

// the instructions don't say to console.log the initial sentence, but the example showed it as such, so I erred on the side of showing.
console.log(sentence);

// console.log the third word.
console.log(arr[2]);
