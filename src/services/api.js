export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJSON = await categories.json();

  return categoriesJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const products = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const productsJSON = await products.json();

  return productsJSON;
}

export async function getProductFromId(id) {
  const itemId = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const itemIdJson = await itemId.json();
  return itemIdJson;
}
