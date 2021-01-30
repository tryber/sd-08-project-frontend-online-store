export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // console.log(categoryId, query);
  if (categoryId && query) {
    // console.log('Teste1');
    const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((data) => data.json());
    return resolve;
  }

  if (categoryId) {
    // console.log('Teste2');
    const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
      .then((data) => data.json());
    return resolve;
  }

  if (query) {
    // console.log('Teste3');
    const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then((data) => data.json());
    return resolve;
  }
}
