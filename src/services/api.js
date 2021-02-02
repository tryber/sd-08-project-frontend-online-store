export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return data.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?${categoryId === '' ? '' : `category=${categoryId}&`}q=${query}`);
  return data.json();
}
