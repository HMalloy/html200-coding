// FIRST PART OF THE ASSIGNMENT

function squared() {
  let userNumber = prompt('Pick a number!');
  let input = Number(userNumber);
  let result = 0;

  result = input * input;
  alert(result);
}

// SECOND PART
// Take two numbers from the user and return the result of multiplying them together.
function multiplied() {
  let userNumbers = prompt('Enter 2 numbers with space between:');
  let numbers = userNumbers.split(' ');
  let first = numbers[0];
  let second = numbers[1];
  let result = 0;

  result = first * second;
  alert(result);
}
//
// const arr = sentence.split(' ');
// function multiplied() {
//   let firstNumber = prompt('Enter a number:');
//   let secondNumber = prompt('Enter another number:');
//   let inputOne = return Number(firstNumber);
//   let inputTwo = return Number(secondNumber);
//   let result = 0;
//
//
//   result = inputOne * inputTwo;
//   alert(result);
// }
