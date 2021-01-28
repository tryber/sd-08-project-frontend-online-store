export async function getCategories() {
  const result = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((res) => res.json());
  return result;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
