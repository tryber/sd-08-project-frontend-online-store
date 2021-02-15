export async function getCategories() {
  try {
    const req = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const json = await req.json();

    return json;
  } catch (error) {
    console.log(`(From async/await getCategories) Error: ${error}`);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const req = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    );

    const json = await req.json();
    return json;
  } catch (error) {
    console.log(`(From async/await getProductsFromCategoryAndQuery) Error: ${error}`);
  }
}
