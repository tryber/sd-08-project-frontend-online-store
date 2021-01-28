export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let fetchURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  if (!categoryId) fetchURL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (!query) fetchURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const response = await fetch(fetchURL);
  return response.json();
}
