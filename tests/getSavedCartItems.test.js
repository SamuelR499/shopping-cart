const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test(`Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o 'cartItems' como parâmetro.`, () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems')
  });
  // fail('Teste vazio');
});
