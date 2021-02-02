export async function getCategories() {
  const fetchURL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(fetchURL);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(fetchURL);
  return response.json();
}
