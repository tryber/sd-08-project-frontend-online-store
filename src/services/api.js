const ENDPOINT = {
  categories: 'https://api.mercadolibre.com/sites/MLB/categories',
  query: (categoryId) => `https://api.mercadolibre.com/sites/MLB/search?q=$${categoryId}`,
};

export async function getCategories() {
  const response = await fetch(ENDPOINT.categories);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId) {
  const response = await fetch(ENDPOINT.query(categoryId));
  const data = await response.json();
  return data;
}
