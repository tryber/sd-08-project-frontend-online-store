const helpers = require('./helpers');

const DEF_LIMIT = 40;

// async function getCategories() {
//   const result = await fetch(
//     'https://api.mercadolibre.com/sites/MLB/categories',
//   ).then((res) => res.json());
//   return result;
// }

async function getProductImages(productId) {
  const result = await fetch(`https://api.mercadolibre.com/items/${productId}`)
    .then((res) => res.json())
    .then((data) => data.pictures.map((i) => i.url));
  return result;
}

async function getCategoriesIds() {
  const result = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  )
    .then((res) => res.json())
    .then((data) => data.map((i) => i.id));
  return result;
}

async function getProductAttributes(productId) {
  const result = await fetch(`https://api.mercadolibre.com/items/${productId}`)
    .then((res) => res.json())
    .then((p) => p.attributes
      .map((i) => ({
        type: i.name,
        value: i.value_name,
      }))
      .filter(
        (i) => i.value !== null
            && i.type !== 'SKU'
            && i.type !== 'Condição do item'
            && i.type !== 'É kit'
            && i.type !== 'Características do produto',
      ));

  return result;
}

async function parseProductData(data) {
  if (!data) return [];
  const result = Promise.all(
    data.map(async (i) => ({
      id: i.id,
      title: i.title,
      category_id: i.category_id,
      price: helpers.parsePrice(i.price),
      mercadopago: i.accepts_mercadopago,
      thumbnail: i.thumbnail.replace('-I.jpg', '-O.jpg'),
      // images: (await getProductImages(i.id)) || [],
      // attributes: (await getProductAttributes(i.id)) || [],
    })),
  );
  return result;
}

async function getProductsByCategory(categoryId, limit = DEF_LIMIT) {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&limit=${limit}`,
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .then(async (data) => parseProductData(data));
  return result;
}

async function getProducts(query, limit = DEF_LIMIT) {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=${limit}`,
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .then(async (data) => parseProductData(data));
  return result;
}

async function getProduct(productId) {
  const result = await fetch(`https://api.mercadolibre.com/items/${productId}`)
    .then((res) => res.json())
    .then(async (i) => ({
      id: i.id,
      title: i.title,
      category_id: i.category_id,
      price: helpers.parsePrice(i.price),
      mercadopago: i.accepts_mercadopago,
      thumbnail: i.thumbnail,
      attributes: (await getProductAttributes(i.id)) || [],
    }));
  return result;
}

async function getRandomProducts() {
  const list = await getCategoriesIds();
  const result = Promise.all(
    list.map(async (c) => {
      const products = await getProductsByCategory(c, 1);
      return products[0];
    }),
  );
  return result;
}

module.exports = {
  getProductAttributes,
  getProductImages,
  getProductsByCategory,
  getProduct,
  getProducts,
  getCategoriesIds,
  getRandomProducts,
};
