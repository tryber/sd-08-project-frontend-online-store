export async function getCategories() {
  const api = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return api;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getProducts = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)).json();
  return getProducts;
}
