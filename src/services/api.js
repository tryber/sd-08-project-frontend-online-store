export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await data.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await data.json();
  return response;
}
