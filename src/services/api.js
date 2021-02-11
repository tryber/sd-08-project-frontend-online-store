export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await categories.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let categories;
  if (categoryId && query === '') {
    categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  } else {
    categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  }
  const result = await categories.json();
  return result;
}
