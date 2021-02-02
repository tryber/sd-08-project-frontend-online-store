export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());

  return request;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${categoryId}`)
      .then((response) => response.json());

    return categories;
  }
  if (!categoryId) {
    const search = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((response) => response.json());

    return search;
  }
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());

  return result.json();
}
