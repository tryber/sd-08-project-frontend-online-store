// const fetch = require('node-fetch');
const { shuffle } = require('./helpers');
//

async function getCategories() {
  const result = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((res) => res.json());
  return result;
}

async function getProductImages(productId) {
  const result = await fetch(`https://api.mercadolibre.com/items/${productId}`)
    .then((res) => res.json())
    .then((data) => data.pictures.map((i) => i.url));
  return result;
}

async function getCategoriesIds() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
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

async function getProductsByCategory(categoryId, limit = 50) {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&limit=${limit}`,
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .then(async (data) => Promise.all(
      data.map(async (i) => ({
        id: i.id,
        title: i.title,
        category_id: i.category_id,
        price: i.price,
        mercadopago: i.accepts_mercadopago,
        thumbnail: i.thumbnail,
        images: (await getProductImages(i.id)) || [],
        // attributes: (await getProductAttributes(i.id)) || [],
      })),
    ));
  return result;
}

async function getProducts(query, limit) {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}&limit=${limit}`,
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .then(async (data) => Promise.all(
      data.map(async (i) => ({
        id: i.id,
        title: i.title,
        category_id: i.category_id,
        price: i.price,
        mercadopago: i.accepts_mercadopago,
        thumbnail: i.thumbnail,
        images: (await getProductImages(i.id)) || [],
        // attributes: (await getProductAttributes(i.id)) || [],
      })),
    ));

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
  shuffle,
  getProductAttributes,
  getProductImages,
  getProductsByCategory,
  getProducts,
  getCategoriesIds,
  getRandomProducts,
};
