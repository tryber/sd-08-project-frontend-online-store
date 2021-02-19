export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json())
    .then((categoryList) => categoryList);
}

function getURL(categoryId, query) {
  if (categoryId && query) {
    return `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=${query}`;
  }
  if (categoryId && !query) {
    return `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  if (!categoryId && query) {
    return `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  }
  return undefined;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = getURL(categoryId, query);
  const products = await fetch(URL)
    .then((data) => data.json())
    .then((productsByCategoryAndQuery) => productsByCategoryAndQuery);
  console.log(products);
  return products;
}
