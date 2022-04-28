const fetchItem = async (id) => {
  // seu código aqui
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const dataFetch = await response.json();
    // console.log(dataFetch);

    return dataFetch;
  } catch (error) {
    return error;
  }
};
fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
