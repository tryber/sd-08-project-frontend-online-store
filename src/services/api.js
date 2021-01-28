export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
  return categories.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let urlBase = 'https://api.mercadolibre.com/sites/MLB/search?';
  if (categoryId && query) {
    urlBase += `category=${categoryId}_ID&q=${query}`;
  } else if (query) {
    urlBase += `q=${query}`;
  } else if (categoryId) {
    urlBase += `category=${categoryId}`;
  }
  return fetch(urlBase)
    .then((response) => response.json());
}
