const fetchProducts = async (produto) => {
  // seu código aqui
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
    const dataFetch = await response.json();
      // console.log(dataFetch.results);
      const data = dataFetch.results;
      return data;
  } catch (error) {
return error;
  }
};
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
