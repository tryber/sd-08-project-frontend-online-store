export async function getCategories() {
  // Implemente aqui
  const listOfCategorys = 'https://api.mercadolibre.com/sites/MLB/categories';
  const result = await fetch(listOfCategorys);
  const response = await result.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
