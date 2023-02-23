'use strict';
console.log('reduce.js file was loaded');

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// skirtas sumazinti masyvo kazkkokias reiksmes iki vienos reikmes ar objekto.
// grazina viena reikmes kuri akumuliuoasi 'total'
// initialValue (pradine total reiksme) - galima rasyti arba ne, rekomendacija iki tam tikro lygio visada rasyti.

const shoppingList = [
  { item: 'Apples', description: 'A bag of fresh apples', quantity: 3, category: 'Fruit' },
  { item: 'Milk', description: 'A carton of whole milk', quantity: 1, category: 'Dairy' },
  { item: 'Bread', description: 'A loaf of sourdough bread', quantity: 2, category: 'Bakery' },
  { item: 'Eggs', description: 'A dozen large eggs', quantity: 2, category: 'Dairy' },
  { item: 'Cheese', description: 'A block of cheddar cheese', quantity: 1, category: 'Dairy' },
  { item: 'Yogurt', description: 'A container of Greek yogurt', quantity: 3, category: 'Dairy' },
  {
    item: 'Chicken',
    description: 'A pack of boneless chicken breasts',
    quantity: 4,
    category: 'Meat',
  },
];

const itemsByCat = {
  fruit: [{ item: 'Apples', description: 'A bag of fresh apples', quantity: 3, category: 'Fruit' }],
  dairy: [
    { item: 'Milk', description: 'A carton of whole milk', quantity: 1, category: 'Dairy' },
    { item: 'Eggs', description: 'A dozen large eggs', quantity: 2, category: 'Dairy' },
  ],
};

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
}, 0);
console.log('numTotal ===', numTotal);

// sudauginti visas numeber vertes

const daugyba = numbers.reduce((total, sk) => {
  const sandauga = total * sk;
  // console.log('sandauga ===', sandauga);
  return sandauga;
}, 1);
console.log('daugyba ===', daugyba);

// kiek prekiu yra musu shopping list, sudeti visus quantity

let numberOfItems = shoppingList.reduce((total, shObj) => {
  const sioCikloSuma = total + shObj.quantity;
  return sioCikloSuma;
}, 0);

// vienos eilutes sprendimas
numberOfItems = shoppingList.reduce((total, shObj) => total + shObj.quantity, 0);
console.log('numberOfItems in our cart ===', numberOfItems);

// suskaiciuoti dviem etapais,
// 1. gauti masyva su skaiciai kuruos sudet
const totalAmmount = shoppingList
  .map((shObj) => shObj.quantity)
  .reduce((total, sk) => total + sk, 0);

console.log('totalAmmount ===', totalAmmount);
// 2. su reduce sudeti sk
