'use strict';
console.log('sort.js file was loaded');

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

// isrikiuoti sarasa pagal kiekius nuo maziausio iki diziausio.

shoppingList.sort(() => {});
