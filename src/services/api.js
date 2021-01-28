export async function getCategories() {
  const categorias = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return categorias.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const category = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    return category.json();
  }
  if (!categoryId) {
    const search = await fetch(` https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return search.json();
  }
  const resultado = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  return resultado.json();
}
