export async function getCategories() {
  const dataFetch = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((response) => response.json());
  return dataFetch;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const path = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  const dataFetch = await fetch(path).then((response) => response.json());
  return dataFetch;
}
