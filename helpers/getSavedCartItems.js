const getSavedCartItems = () => {
  // seu código aqui// oque fazer aqui
  localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
