//codepen: https://codepen.io/HMalloy/pen/XWbaBxg

// Create an array, with at least 5 strings
const heather = ['mother', 'wife', 'artist', 'yogini', 'rock star'];
console.log(heather);

// Add an element to the end of the end of the array
heather.push('future front-end developer');
console.log(heather);

// Remove the third element
heather.splice(2, 1);
console.log(heather);

// Create a string from the elements and comma separate them
let str = heather.join(', ');
console.log(str);
