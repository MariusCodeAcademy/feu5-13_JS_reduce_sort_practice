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
  onlyDairyBtn: document.getElementById('onlyDairy'),
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
    crEl('th', headerName, tr1, 'headerBtn');
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
  addHeaderEventListeners();
}
createHtmlTable(shoppingList);

function addHeaderEventListeners() {
  // visu sugeneruoto lenteles headeriu elementai
  const tableHeadersArr = els.app.querySelectorAll('.headerBtn');
  // console.log('tableHeadersArr ===', tableHeadersArr);

  tableHeadersArr.forEach((thEl) => {
    // kai sortByItemHandler negalim prideti skliausteliu, pakeiciam i arrow fn
    thEl.addEventListener('click', () => sortByItemHandler(thEl.textContent));
  });
}
// els.sortItemBtn.addEventListener('click', sortByItemHandler);

function sortByItemHandler(sortBy) {
  console.log('sortByItemHandler ivyko', sortBy);

  if (sortBy === 'quantity') {
    // sort by item number sort
    sortNumberItems(shoppingList, sortBy);
  } else {
    // sort by item text sort
    sortItems(shoppingList, sortBy);
  }

  // draw table
  createHtmlTable(shoppingList);
}

els.onlyDairyBtn.addEventListener('click', filterDairyProducts);

function filterDairyProducts() {
  console.log('filterDairyProducts ivyko');
  // isfiltruoti shoppingList kad liktu tik dairy produktai
  const dairyOnly = shoppingList.filter((shObj) => shObj.category === 'dairy');
  // perpiesti lentele
  createHtmlTable(dairyOnly);
}

// helper fn

function sortItems(arr, byWhat, sortOrder = 'a-z') {
  arr.sort((aObj, bObj) => aObj[byWhat].localeCompare(bObj[byWhat]));
}

function sortNumberItems(arr, byWhat) {
  arr.sort((aObj, bObj) => aObj[byWhat] - bObj[byWhat]);
}
function crEl(tagName, text = '', parent = '', className = '') {
  const newEl = document.createElement(tagName);
  if (className) newEl.classList.add(className);
  if (text) newEl.textContent = text;
  if (parent) parent.appendChild(newEl);
  return newEl;
}
