export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => console.log(error));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(url)
    .then((data) => data.json())
    .catch((error) => console.log(error));
}
