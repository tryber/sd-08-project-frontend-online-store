function shuffle(arr) {
  let j;
  let x;
  let index;
  for (index = arr.length - 1; index > 0; index -= 1) {
    j = Math.floor(Math.random() * (index + 1));
    x = arr[index];
    arr[index] = arr[j];
    arr[j] = x;
  }
  return arr;
}

function parsePrice(price) {
  const aux = `${price}.00`;
  const arr = aux.split('.').map((i) => i.padEnd(2, '0'));
  return `${arr[0]},${arr[1]}`;
}

async function parseProductData(data) {
  if (!data) return [];
  const result = Promise.all(
    data.map(async (i) => ({
      id: i.id,
      title: i.title,
      category_id: i.category_id,
      price: parsePrice(i.price),
      mercadopago: i.accepts_mercadopago,
      thumbnail: i.thumbnail.replace('-I.jpg', '-O.jpg'),
      shipping: i.shipping.free_shipping,
      stock: i.available_quantity,
      // images: (await getProductImages(i.id)) || [],
      // attributes: (await getProductAttributes(i.id)) || [],
    })),
  );
  return result;
}

const parseCart = (cart) => {
  if (!cart) return [];
  return cart.reduce((a, c) => {
    const index = a.findIndex((i) => i.id === c.id);
    c.price = parseFloat(c.price);
    if (index >= 0) {
      a[index].quantity += 1;
      a[index].total += parseFloat(c.price);
    } else {
      a.push({ ...c, quantity: 1, total: parseFloat(c.price) });
    }
    return a;
  }, []);
  // .sort((a, b) => a.title.localeCompare(b.title));
};

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
            && i.value !== undefined
            && i.value !== 'UNDEFINED'
            && i.type !== 'SKU'
            && i.type !== undefined
            && i.type !== 'Condição do item'
            && i.type !== 'É kit'
            && i.type !== 'Características do produto',
      ));

  return result;
}

module.exports = {
  shuffle,
  parsePrice,
  parseProductData,
  parseCart,
  getProductAttributes,
};
