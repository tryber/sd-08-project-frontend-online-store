// const fetch = require('node-fetch');
// const fs = require("fs");
// const path = require("path");

const getCategories = async () => {
  const result = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((res) => res.json());
  return result;
};

// const getProductsFromCategoryAndQuery = (/* categoryId, query */) => {
//   // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
// };

const getProductImages = async (productId) => {
  const result = await fetch(`https://api.mercadolibre.com/items/${productId}`)
    .then((res) => res.json())
    .then((data) => data.pictures.map((i) => i.url));
  return result;
};

const getAllProductAttributes = async (categoryId) => {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .then(
      async (data) => await Promise.all(data.map(async (i) => await getProductAttributes(i.id)) || []),
    );

  return result;
};

const getProductAttributes = async (productId) => {
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
};

const getProductsByCategory = async (categoryId) => {
  const result = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
  )
    .then((res) => res.json())
    .then((data) => data.results)
    .then(
      async (data) => await Promise.all(
        data.map(async (i) => ({
          id: i.id,
          title: i.title,
          category_id: i.category_id,
          price: i.price,
          mercadopago: i.accepts_mercadopago,
          thumbnail: i.thumbnail,
          images: (await getProductImages(i.id)) || [],
          attributes: (await getProductAttributes(i.id)) || [],
        })),
      ),
    );
  return result;
};

const getProducts = async (query) => {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => data.results)
    .then(
      async (data) => await Promise.all(
        data.map(async (i) => ({
          id: i.id,
          title: i.title,
          category_id: i.category_id,
          price: i.price,
          mercadopago: i.accepts_mercadopago,
          thumbnail: i.thumbnail,
          images: (await getProductImages(i.id)) || [],
          attributes: (await getProductAttributes(i.id)) || [],
        })),
      ),
    );

  return result;
};

module.exports = {
  getCategories,
  getProducts,
  getProductsByCategory,
  getProductAttributes,
  getProductImages,
  getAllProductAttributes,
};
