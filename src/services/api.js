export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  fetch(url)
    .then((data) => data.json())
    .then((api) => console.log(api));
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
