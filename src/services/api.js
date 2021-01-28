export async function getCategories() {
  const fetchedInfo = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchedInfo.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchedInfo = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const filteredResponse = await fetchedInfo.json();
  return filteredResponse;
}
