export async function getCategories() {
  // Implemente aqui
}

// export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
//   // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
//   const getProductsFromCategory = await fetch(`https://api.mercadolibre.com/categories/${categoryId}`)
//     .then((response) => response.json());
//   const { id, name } = getProductsFromCategory;
//   return getProductsFromCategory;
// }

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getProductsFromCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchResult = await fetch(getProductsFromCategory);
  const expectedObject = await fetchResult.json();
  return expectedObject;
}
