export async function getCategories() {
  const categorie = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return categorie;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const category = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((response) => response.json());
    return category;
  }
  if (!categoryId) {
    const search = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((response) => response.json());
    return search;
  }
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
  return result;
}
