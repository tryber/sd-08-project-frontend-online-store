const erro = 404;
const failedRequest = 'Falhou a requisição.';
const noResult = 'Não encontrou nenhum resultado.';
const urlCategory = 'https://api.mercadolibre.com/sites/MLB/categories';
const urlCategoryID = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
const urlAll = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

export async function getCategories() {
  const categorie = await fetch(urlCategory)
    .then((response) => {
      if (!response.ok) return new Error(failedRequest);
      if (response.status === erro) return new Error(noResult);
      response = response.json();
    });
  return categorie;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const category = await fetch(urlCategoryID)
      .then((response) => response.json());
    return category;
  }
  if (!categoryId) {
    const search = await fetch(urlQuery)
      .then((response) => response.json());
    return search;
  }
  const result = await fetch(urlAll)
    .then((response) => response.json());
  return result;
}
