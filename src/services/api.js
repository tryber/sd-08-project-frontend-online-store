export async function getCategories() {
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getProductsFromCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchResult = await fetch(getProductsFromCategory);
  const expectedObject = await fetchResult.json();
  return expectedObject;
}
