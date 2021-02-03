export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endpoint);
  return response.json();
}

export async function getItemById(itemId) {
  const endpoint = `https://api.mercadolibre.com/items/${itemId}`;
  const response = await fetch(endpoint);
  return response.json();
}
