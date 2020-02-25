// https://codepen.io/HMalloy/pen/poJejWp

let firstName = 'Heather';
let lastName = 'Malloy';
let age = 14;
const canDrive = 16;

if (age > canDrive) {
  console.log(firstName + ' ' + lastName + ' can drive, and has been legally able to for ' + (age-canDrive) + ' years!')
} else if (age < canDrive) {
  for (let i = 5; i >= 0; i--) {
    console.log(i + ' - ' + firstName + ' ' + lastName + ' cannot drive for ' + (canDrive-age) + ' more years.')
  }
}
