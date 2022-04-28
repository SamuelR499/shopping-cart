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

function cartItemClickListener(event) {
  // coloque seu código aqui
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
  console.log(idProduto);
  const { id, title, price } = idProduto;
  const carrinho = document.querySelector('.cart__items');
  carrinho.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
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

window.onload = () => {
  pegarElementos('computador');
};
