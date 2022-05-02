const carrinho = document.querySelector('.cart__items');
const clear = document.querySelector('.empty-cart');
const span = document.createElement('span');
const total = document.querySelector('.total-price');
// span.innerText = 'carregando...';
// span.className = 'loading';
total.innerHTML = '0';
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

function somaCart() {
  const items = document.querySelectorAll('.cart__item');
  let soma = 0;
  console.log(items);

  for (let i = 0; i < items.length; i += 1) {
    soma += Number(items[i].innerText.split('$')[1]);
  }
  total.innerHTML = `Total: ${soma.toFixed(2)}`;
  localStorage.setItem('totalItem', total.innerHTML);
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
  saveCartItems(carrinho.innerHTML);
  somaCart();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function cartItemClick(event) {
  // fazer o eventro
  const idProduto = await fetchItem(event.target.parentNode.firstChild.innerText);
  // console.log(idProduto);
  const { id, title, price } = idProduto;
  carrinho.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
  saveCartItems(carrinho.innerHTML);
  somaCart();
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', cartItemClick);
  return section;
}

const pegarElementos = async (item) => {
  const produtos = await fetchProducts(item);
  produtos.forEach(({ id, title, thumbnail }) => {
    const result = createProductItemElement({ sku: id, name: title, image: thumbnail });
    const sectionItems = document.querySelector('.items');
    sectionItems.appendChild(result);
  });
};
// ``````````````Bloco de remover todos``````````````
function removeAll() {
  carrinho.innerHTML = '';
  saveCartItems(carrinho.innerHTML);
  somaCart();
}
clear.addEventListener('click', removeAll);
// `````````````````````````````````````````````````````

window.onload = () => {
  total.innerHTML = localStorage.getItem('totalItem');
  carrinho.innerHTML = localStorage.getItem('cartItems');
  for (let i = 0; i < carrinho.children.length; i += 1) {
    const element = carrinho.children[i];
    element.addEventListener('click', cartItemClickListener);
  }
  pegarElementos('computador');
};
// https://pt.stackoverflow.com/questions/292455/filtrar-array-de-strings <- Salvou muito!!! gostei da dica!!

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt me ajudou a converter string para numero.

// https://medium.com/aprendajs/convertendo-uma-string-em-um-numero-em-javascript-e6c856fb53be