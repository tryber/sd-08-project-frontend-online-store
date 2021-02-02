export async function getCategories() {
  const dataFetch = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((response) => response.json());
  return dataFetch;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let path = '';
  if (categoryId && query) {
    path = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    path = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (query) {
    path = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else {
    return '';
  }

  const dataFetch = await fetch(path)
    .then((response) => response.json())
    .then((products) => products);
  return dataFetch;
}
