// let balance = 5000;

// function updateBalance() {

// }
const balance = function(x) {
  let current = 5000;

  function updateBalance(){
    const inputText = `What would you like to do?
      D - Deposit
      W - Withdrawal
      B - Check your Balance
      Q - Quit`;
    const userInput = prompt(inputText).toLowerCase();

    // function for making a deposit
    function makeDeposit() {
      money = prompt('Enter deposit amount:');
      amount = Number(money);
      x = current + amount;

      if (isNaN(amount)) {
        alert('Please enter numbers only.')
        updateBalance();
      } else {
        alert(`$${amount} has been deposited into your account.

Your new balance is $${x}.`);
      }
      current = x;
      return x;
    }

    // function for making a deposit
    function makeWithdrawal() {
      money = prompt('Enter withdrawal amount:');
      amount = Number(money);
      x = current - amount;

      if (isNaN(amount)) {
        alert('Please enter numbers only.')
        updateBalance();
      } else {
        alert(`$${amount} has been deposited into your account.

Your new balance is $${x}.`);
      }
      current = x;
      return x;
    }

    switch (userInput) {
      case 'd':
        makeDeposit();
        updateBalance();
        break;
      case 'w':
        makeWithdrawal();
        updateBalance();
        break;
      case 'b':
        alert(`Current Balance: $${x}.`)
        updateBalance();
        break;
      case 'q':
        alert("Goodbye!");
        break;
      default:
        alert("Command not recognized. Please try again.");
        updateBalance();
    }
  }

  updateBalance();
  return x;
};

balance();
