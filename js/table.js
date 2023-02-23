'use strict';
console.log('table.js file was loaded');

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

// nustitaikyti i el

const els = {
  app: document.getElementById('app'),
};

/* 
<table>
  <tr>
    <th>item</th>
    <th>description</th>
    <th>quantity</th>
    <th>category</th>
  </tr>
</table>
*/
const headers = ['item', 'description', 'quantity', 'category'];

// sukurti table
// sukurti tr
// cikle kurti th prideti texta ir iterpti i tr
