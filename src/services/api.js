export async function getCategories() {

  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
  const catJson = await categories.json()
  console.log(catJson)
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
