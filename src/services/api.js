export const cart = [];

export const searchResults = 'tes';

export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const requestReturn = await fetch(url);
  const requestObject = await requestReturn.json();
  return requestObject;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const requestReturn = await fetch(url);
  const requestObject = await requestReturn.json();
  return requestObject;
}
