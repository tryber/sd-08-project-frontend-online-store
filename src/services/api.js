export async function getCategories() {
  const category = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return category;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const product = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
  return product;
}
