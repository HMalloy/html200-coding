const balance = function(x) {
  let current = 5000;

  function updateBalance(){
    const inputText = `What would you like to do?
      D - Deposit
      W - Withdrawal
      B - Check your Balance
      Q - Quit`;
    const userInput = prompt(inputText).toLowerCase().trim();
    let quit = false;


    // function for making a deposit
    function makeDeposit() {
      money = prompt('Enter deposit amount:');
      amount = Number(money);
      x = current + amount;

      // check to see that what they entered was actually a number
      if (isNaN(amount)) {
        alert('Please enter numbers only.')
        //updateBalance();
      } else {
        // stop them from depositing more than $50,000 in one day
        if (current + amount > 55000) {
          // make sure the balance doesn't go up
          x = current;
          alert('You cannot deposit more than $50,000 in one day. Please try again with a smaller amount.');
        } else {
          alert(`$${amount} has been deposited into your account. Your new balance is $${x}.`);}
          current = x;
          return x;
        }
      //  updateBalance();
    }

    // function for making a withdrawal
    function makeWithdrawal() {
      money = prompt('Enter withdrawal amount:');
      amount = Number(money);
      x = current - amount;

      // first check that what was entered is actually a number and give a warning if it was not
      if (isNaN(amount)) {
        alert('Please enter numbers only.');
      } else {
        // check that they are not going to overdraw their account, and don't let them continue if they will
        if (current - amount < 0) {
          alert('You do not have enough money to withdraw this. Please try again.');
          // check to see if total will go below $300 and give them a heads up if it will
        } else if (current - amount < 300) {
          let inpU = prompt('This will put your balance below $300. Do you want to proceed? Type "yes" to continue, or "no" to cancel.');
          let uRes = inpU.toLowerCase().trim();

          // let them choose whether or not to go forward with the withdrawal
          if (uRes == 'yes') {
            alert(`$${amount} has been withdrawn from your account. Your new balance is $${x}.`);
            current = x;
          } else {
            alert(`Withdrawal canceled. Current balance: $${current}.`)
          }
        } else {
          alert(`$${amount} has been withdrawn from your account. Your new balance is $${x}.`);
          current = x;}
      }

      return x;
    //  updateBalance();
    }

    // function for quitting program
    function quitApplication(){
      alert('Goodbye!');
    };

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
        alert(`Current Balance: $${current}.`)
        updateBalance();
        break;
      case 'q':
        quitApplication();
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
