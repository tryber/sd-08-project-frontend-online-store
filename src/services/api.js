export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let queryString = '';

  if (categoryId) {
    queryString = `category=${categoryId}&`;
  }

  if (query) {
    queryString += `q=${query}`;
  }

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?${queryString}`);
  return response.json();
}
