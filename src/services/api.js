export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = 'https://api.mercadolibre.com/sites/MLB/search?';
  if (query && categoryId) {
    url += `category=${categoryId}&q=${query}`;
  } else if (query) {
    url += `q=${query}`;
  } else {
    url += `category=${categoryId}`;
  }
  return fetch(url)
    .then((response) => response.json());
}
