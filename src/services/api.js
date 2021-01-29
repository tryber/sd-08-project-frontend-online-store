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
  return `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  console.log('invocando');
  const URL = getURL(categoryId, query);
  const products = await fetch(URL)
    .then((data) => data.json())
    .then((productsByCategoryAndQuery) => productsByCategoryAndQuery.results);
  return products;
}

// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
//     .then((data) => data.json())
//     .then((productsByCategoryAndQuery) => productsByCategoryAndQuery);
//   return products;
// }
