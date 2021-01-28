 const listOfCategorys ='https://api.mercadolibre.com/sites/MLB/categories'

export async function getCategories() {
  // Implemente aqui
  if(listOfCategorys === 'https://api.mercadolibre.com/sites/MLB/categories'){
const result = await fetch(listOfCategorys, {method: 'GET'})
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(response => response.categories)
    return result;
  }

}

export async function getProductsFromCategoryAndQuery(categoryId, query ) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe

}
