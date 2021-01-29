const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  // Implemente aqui
  const req = await fetch(`${BASE_URL}categories`);
  const result = await req.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(_categoryId, _query) {
  const BUSCA_QUERY_CATEGORY = `${BASE_URL}search?category=${_categoryId}&q=${_query}`;
  const req = await fetch(BUSCA_QUERY_CATEGORY);
  const result = await req.json();
  return result;
}
