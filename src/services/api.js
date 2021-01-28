export async function getCategories() {
  // Implemente aqui
  const listOfCategorys = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(listOfCategorys);
  const response = await result.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getProductsFromCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchResult = await fetch(getProductsFromCategory);
  const expectedObject = await fetchResult.json();
  return expectedObject;
}
