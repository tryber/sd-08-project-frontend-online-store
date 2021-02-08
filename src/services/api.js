export async function getCategories() {
  const categorias = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return categorias.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return resultado.json();
}
