require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('este se fetchItem é uma função;', () => {
    expect(typeof fetchItem).toEqual('function');
  });

  it(`Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;
  `, async() => {
    await fetchItem('MLB1615760527');
    expect(fetch).toReturn();
  });

  test('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  test('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const objetItem = await fetchItem('MLB1615760527');
    expect(objetItem).toEqual(item);
  });

  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
     
    expect(await fetchItem()).toEqual(new Error('You must provide an url'))
  });
  // fail('Teste vazio');
});
