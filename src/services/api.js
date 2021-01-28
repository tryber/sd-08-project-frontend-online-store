export async function getCategories() {
  const result = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((res) => res.json());
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  ).then((res) = res.json());
  return result;
}
