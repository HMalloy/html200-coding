// https://codepen.io/HMalloy/pen/OJVpMNO

// a card deck has 52 cards
// 4 faces - diamonds, hearts, spades, clubs
// 13 - Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king

let faces = ['Diamonds','Hearts','Spades','Clubs'];

for (i = 0; i < 4; i++){
  for (j = 1; j < 14; j++) {
    if (j === 1) {
      console.log('Ace of ' + faces[i]);
    } else if (j === 11) {
      console.log('Jack of ' + faces[i]);
    } else if (j === 12) {
      console.log('Queen of ' + faces[i]);
    } else if (j === 13) {
      console.log('King of ' + faces[i]);
    } else {
      console.log(j + ' of ' + faces[i]);
    }
   }
};
