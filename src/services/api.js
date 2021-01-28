const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/';
const BUSCA_QUERY = `${BASE_URL}search?q=$QUERY`;
const BUSCA_CATEGORYID = `${BASE_URL}search?category=$CATEGORY_ID`;
const BUSCA_QUERY_CATEGORY = `${BASE_URL}search?category=$CATEGORY_ID&q=$QUERY`;

export async function getCategories() {
  // Implemente aqui
  const req = await fetch(`${BASE_URL}categories`);
  return req.json();
}

export async function getProductsFromCategoryAndQuery(_categoryId, _query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (_query && _categoryId) {
    const req = await fetch(BUSCA_QUERY_CATEGORY);
    return req.json();
  }
  if (_categoryId) {
    const req = await fetch(BUSCA_CATEGORYID);
    return req.json();
  }
  const req = await fetch(BUSCA_QUERY);
  return req.json();
}
