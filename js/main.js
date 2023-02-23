'use strict';
console.log('main.js file was loaded');

// transformation time with reduce.

const shoppingList = [
  { item: 'Apples', description: 'A bag of fresh apples', quantity: 3, category: 'fruit' },
  { item: 'Milk', description: 'A carton of whole milk', quantity: 1, category: 'dairy' },
  { item: 'Bread', description: 'A loaf of sourdough bread', quantity: 2, category: 'bakery' },
  { item: 'Eggs', description: 'A dozen large eggs', quantity: 2, category: 'dairy' },
  { item: 'Cheese', description: 'A block of cheddar cheese', quantity: 1, category: 'dairy' },
  { item: 'Yogurt', description: 'A container of Greek yogurt', quantity: 3, category: 'dairy' },
  {
    item: 'Chicken',
    description: 'A pack of boneless chicken breasts',
    quantity: 4,
    category: 'meat',
  },
];

const itemsByCategory = shoppingList.reduce((transfObj, shObj) => {
  // turim pasitikrinti ar jau transfObj yra tokia property?
  if (transfObj[shObj.category]) {
    // jei yra, norim pushinti i esama masyva
    transfObj[shObj.category].push(shObj);
  } else {
    // jei nera norim sukurti masyva ir ideti reiksme
    transfObj[shObj.category] = [shObj];
  }

  // pridedam nauja property prie transfObj
  // grazinam transfObj
  return transfObj;
}, {});
console.log(JSON.stringify(itemsByCategory, null, 1));

const itemsByCat = {
  fruit: [{ item: 'Apples', description: 'A bag of fresh apples', quantity: 3, category: 'Fruit' }],
  dairy: [
    { item: 'Milk', description: 'A carton of whole milk', quantity: 1, category: 'Dairy' },
    { item: 'Eggs', description: 'A dozen large eggs', quantity: 2, category: 'Dairy' },
  ],
};
