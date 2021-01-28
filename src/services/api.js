export async function getCategories() {
  const results = fetch('https://api.mercadolibre.com/sites/MLB/categories').then((data) => data.json())
    .then((result) => result);
  return results;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const resultJson = await result.json();
  return resultJson;
}
