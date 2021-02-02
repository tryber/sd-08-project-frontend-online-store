// const fetch = require('node-fetch');

export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((data) => data.json());
  }
  else if (!query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((data) => data.json());
  }
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}category=${categoryId}&q=${query}`)
    .then((data) => data.json());
}

/* export async function getProductsFromQuery(query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((data) => data.json());
}

export async function getProductsFromCategory(category) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${category}`)
    .then((data) => data.json());
} */
