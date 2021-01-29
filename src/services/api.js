export async function getCategories() {
  // Implemente aqui
  const listOfCategorys = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await listOfCategorys.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getProductsFromCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchResult = await fetch(getProductsFromCategory);
  const expectedObject = await fetchResult.json();
  return expectedObject;
}
