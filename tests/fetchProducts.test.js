require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui

  test('se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts).toEqual('function');
  });

  test('Teste se fetch foi chamada ao Executr fetchProducts;', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const objeto = await fetchProducts('computador');
    expect(objeto[0]).toEqual(computadorSearch.results[0])
  });

  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const objeto = await fetchProducts();
    expect(objeto).toEqual(new Error('You must provide an url'))
  });

  // fail('Teste vazio');
});
