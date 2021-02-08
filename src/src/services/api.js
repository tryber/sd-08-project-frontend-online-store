export async function getCategories() {
  const listOfCategorys = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await listOfCategorys.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getProductsFromCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const result = await getProductsFromCategory.json();
  return result;
}

export async function SearchIdFromName(productName) {
  const getProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productName}`);
  const result = await getProduct.json();
  return result;
}
