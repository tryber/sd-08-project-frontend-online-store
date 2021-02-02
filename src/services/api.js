const erro = 404;
const failedRequest = 'Falhou a requisição';
const noResult = 'Não encontrou nenhum resultado';
const urlCategory = 'https://api.mercadolibre.com/sites/MLB/categories';
const urlCategoryID = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
const urlAll = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

async function funcFetch(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) return new Error(failedRequest);
      if (response.status === erro) return new Error(noResult);
      return response.json();
    });
}

export async function getCategories() {
  await funcFetch(urlCategory);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) return funcFetch(urlCategoryID);
  if (!categoryId) return funcFetch(urlQuery);
  funcFetch(urlAll);
}
