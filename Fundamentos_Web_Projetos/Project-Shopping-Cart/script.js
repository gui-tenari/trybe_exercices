let TOTAL_PRICE = 0;

// Axillar Functions

function calculateResult(price = 0) {
  const priceTable = document.querySelector('.total-price');
  TOTAL_PRICE += price;
  priceTable.innerHTML = `${TOTAL_PRICE}`;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

// Events

function saveCart() {
  const cart = document.getElementsByClassName('cart__item');
  const items = [];
  for (let index = 0; index < cart.length; index += 1) {
  items.push(cart[index].innerText);
  }
  localStorage.cart = JSON.stringify(items);
  localStorage.price = TOTAL_PRICE.toFixed(2);
}

function cartItemClickListener(event) {
  const number = Number(event.target.innerText.split('PRICE: $')[1]);
  const wishList = (event.target).parentNode;
  wishList.removeChild(event.target);
  calculateResult(-number);
  saveCart();
}

// Create items //

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// Cart items
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  calculateResult(salePrice);
  return li;
}

function addItemOnCart(event) {
  const ItemID = (((event.target).parentNode).firstChild.innerText);
  fetch(`https://api.mercadolibre.com/items/${ItemID}`)
  .then((data) => data.json())
  .then((product) => 
  document.querySelector('.cart__items').appendChild(createCartItemElement(product)))
  .then(() => saveCart());
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  if (element === 'button') {
    e.addEventListener('click', addItemOnCart);
  }
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function recreateCartItemElement(string) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = string;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// onload

function menageLoading(radix) {
  if (radix) {
      const loading = document.querySelector('.loading');
      const parent = loading.parentNode;
      parent.removeChild(loading);
  } else {
    const loading = document.createElement('span');
    loading.className = 'loading';
    loading.innerText = 'loading';
    document.querySelector('.items').appendChild(loading);
  }
}

function cartButtonEmptyClickListener() {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', () => {
    TOTAL_PRICE = 0;
    const wishList = document.getElementsByClassName('cart__items')[0];
    wishList.innerHTML = '';
    calculateResult();
    saveCart();
  });
}

async function getProducts() {
  menageLoading();
   const data = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=$computador');
   const object = await data.json();
   await object.results.forEach((obj) => {
    document.querySelector('.items').appendChild(createProductItemElement(obj));
  });
  await menageLoading(true);
}

function reloadCart() {
  const list = localStorage.cart;
  (JSON.parse((list))).forEach((element) => {
    document.querySelector('.cart__items').appendChild(recreateCartItemElement(element));
  });
  const localStoragePrice = localStorage.price;
  TOTAL_PRICE = Number(localStoragePrice);
  calculateResult();
}

window.onload = () => {
  getProducts();
  cartButtonEmptyClickListener();
  if (localStorage.cart) {
  reloadCart();
  }
};
