'use strict';
console.log('reduce.js file was loaded');

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// skirtas sumazinti masyvo kazkkokias reiksmes iki vienos reikmes ar objekto.
// grazina viena reikmes kuri akumuliuoasi 'total'
// initialValue (pradine total reiksme) - galima rasyti arba ne, rekomendacija iki tam tikro lygio visada rasyti.

const shoppingList = [
  { item: 'Apples', description: 'A bag of fresh apples', quantity: 3 },
  { item: 'Milk', description: 'A carton of whole milk', quantity: 1 },
  { item: 'Bread', description: 'A loaf of sourdough bread', quantity: 2 },
  { item: 'Eggs', description: 'A dozen large eggs', quantity: 2 },
  { item: 'Cheese', description: 'A block of cheddar cheese', quantity: 1 },
  { item: 'Yogurt', description: 'A container of Greek yogurt', quantity: 3 },
  {
    item: 'Chicken',
    description: 'Boneless chicken breasts',
    quantity: 4,
  },
];

const numbers = [1, 2, 3, 4, 5, 6, 7];

// su forEach sudeti visas numbers reikmes i viena ir atspaudinti suma

let total = 0;
numbers.forEach((sk) => {
  total = total + sk;
  // total += sk;
});
console.log('total ===', total);

// su reduce sudeti visas numbers reikmes i viena ir atspaudinti suma

const numTotal = numbers.reduce((total, sk, i, arr) => {
  let suma = total + sk;
  console.log(`index: ${i}, total: ${total} + sk: ${sk} = ${suma}`);
  return suma;
}, -100);
console.log('numTotal ===', numTotal);

// sudauginti visas numeber vertes

const daugyba = numbers.reduce((total, sk) => {
  const sandauga = total * sk;
  // console.log('sandauga ===', sandauga);
  return sandauga;
}, 1);
console.log('daugyba ===', daugyba);
