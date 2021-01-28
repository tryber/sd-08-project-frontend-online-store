export async function getCategories() {
  const requestFetch = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const objCategories = await requestFetch.json();
  return objCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let objCategoryQuery = '';
  if (categoryId && query === undefined) {
    const requestCategoryID = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    objCategoryQuery = await requestCategoryID.json();
  }
  if (categoryId === undefined && query) {
    const requestQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    objCategoryQuery = await requestQuery.json();
  }
  if (categoryId && query) {
    const requestQueryCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
    objCategoryQuery = await requestQueryCategory.json();
  }
  return objCategoryQuery;
}
