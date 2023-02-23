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
console.log('els ===', els);
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

function createHtmlTable(tableDataArr) {
  els.app.innerHTML = '';
  // sukurti table
  const table = crEl('table', null, els.app, 'shopTable');
  // sukurti tr headers
  const tr1 = crEl('tr', null, table);
  // cikle kurti th prideti texta ir iterpti i tr
  headers.forEach((headerName) => {
    crEl('th', headerName, tr1);
  });

  // tbody
  const tbody = crEl('tbody', null, table);
  tableDataArr.forEach((shObj) => {
    const tr = crEl('tr', null, tbody);
    // sukurti td
    crEl('td', shObj.item, tr);
    crEl('td', shObj.description, tr);
    crEl('td', shObj.quantity, tr);
    crEl('td', shObj.category, tr);
  });
}
createHtmlTable(shoppingList);

// helper fn

function crEl(tagName, text = '', parent = '', className = '') {
  const newEl = document.createElement(tagName);
  if (className) newEl.classList.add(className);
  if (text) newEl.textContent = text;
  if (parent) parent.appendChild(newEl);
  return newEl;
}
crEl('p', null, els.app);
crEl('h2', 'hello, world', els.app);
