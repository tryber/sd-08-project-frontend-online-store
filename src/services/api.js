export async function getCategories() {
  const resolve = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json());
  return resolve;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((data) => data.json());
    return resolve;
  }

  if (categoryId) {
    const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((data) => data.json());
    return resolve;
  }

  if (query) {
    const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((data) => data.json());
    return resolve;
  }
}
