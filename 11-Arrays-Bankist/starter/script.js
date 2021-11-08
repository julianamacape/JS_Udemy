'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}£</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${account.balance} £`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}£`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}£`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}£`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

let currentAccount; //Vamos só deixar essa variável criada aqui inicialmente como "let" pq ao longo do código ela será usada outras vezes e seu valor alterado

btnLogin.addEventListener('click', function (e) {
  //Pq o "e" como parâmetro? Pq vamos precisar mexer com o "event" da função, que no caso é o de clicar
  e.preventDefault(); //Fizemos isso pq todo button qd clicado dentro de um form tem por "padrão" atualizar a página, e não queremos isso
  currentAccount = accounts.find(
    account => account.username === inputLoginUsername.value
  );
  console.log(currentAccount.username);

  //Agora vamos cruzar o username inserido com o PIN inserido e ver se ambos dão "match" ou não pra poder ou não autorizar o LOGIN
  //Outra coisa, perceba que utilizamos "optional chaining", pois se for inserido um username que não existe, o retorno é "undefined" e não um erro
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //Display movements
    displayMovements(currentAccount.movements);
    //Display balance
    calcDisplayBalance(currentAccount);
    //Display summary
    calcDisplaySummary(currentAccount);
    //Clear input fields (username and PIN)
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recipientAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log('transfer valid, BITCH');
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recipientAcc?.username !== currentAccount.username
  ) {
  }
});
//console.log(accounts);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//const eurToBrl = 6.39;
/*
const movementsBRL = movements.map(function (mov) {
  return mov * eurToBrl;
});
console.log(movements);
console.log(movementsBRL);

/////////////////////////////////////////////////
const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: you deposited ${mov}.00`;
  } else {
    return `Movement ${i + 1}: you withdrew ${Math.abs(mov)}.00`;
  }
});

console.log(movementsDescriptions);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const onlyWithdrawals = movements.filter(function (movement) {
  return movement < 0;
});

//Using an arrow function
//const onlyWithdrawals = movements.filter(movement => movement < 0); "That's it!"

console.log(onlyWithdrawals);
*/
