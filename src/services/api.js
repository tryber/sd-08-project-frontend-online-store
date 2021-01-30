const ENDPOINT = {
  categories: 'https://api.mercadolibre.com/sites/MLB/categories',
  query: (categoryId, query) => `https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}&q=${query}`,
};

export async function getCategories() {
  const response = await fetch(ENDPOINT.categories);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(ENDPOINT.query(categoryId, query));
  const data = await response.json();
  return data;
}
