export async function getCategories() {
  const endPoint = await fetch('https://api.mercadolibre.com/sites/MLB/categories').then((data) => data.json());
  return endPoint;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  ).then((data) => data.json());
  return endPoint;
}

export async function getProduct(id) {
  const endPoint = await fetch(
    `https://api.mercadolibre.com/items/${id}`,
  ).then((data) => data.json());
  return endPoint;
}
