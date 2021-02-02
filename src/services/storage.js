function checkingProduct(storageProducts, title) {
  return storageProducts.some((productSome) => productSome.title === title);
}

export function addAnotherProduct(title) {
  let storageProducts = JSON.parse(localStorage.getItem('cart'));
  const newStorageProducts = [];
  storageProducts.forEach((key, index) => {
    if ((key.title === title)) {
      key.count += 1;
    }
    newStorageProducts[index] = { ...key };
  });
  storageProducts = newStorageProducts;
  localStorage.setItem('cart', JSON.stringify(storageProducts));
}

export function removeAnotherProduct(title) {
  let storageProducts = JSON.parse(localStorage.getItem('cart'));
  const newStorageProducts = [];
  storageProducts.forEach((key, index) => {
    if (key.title === title) {
      const cheched = key.count >= 1;
      if (cheched) key.count -= 1;
    }
    newStorageProducts[index] = { ...key };
  });
  storageProducts = newStorageProducts;
  localStorage.setItem('cart', JSON.stringify(storageProducts));
}

export default function addStorage(product) {
  const { title, price } = product;
  const newProduct = { title, price, count: 1 };
  if (localStorage.getItem('cart')) {
    let storageProducts = JSON.parse(localStorage.getItem('cart'));
    if (checkingProduct(storageProducts, title)) {
      const productsFilter = storageProducts.filter((key) => key.title !== title);
      const productFilter = storageProducts.find((key) => key.title === title);
      productFilter.count += 1;
      storageProducts = [productFilter, ...productsFilter];
      localStorage.setItem('cart', JSON.stringify(
        storageProducts,
      ));
    } else {
      storageProducts = [...storageProducts, newProduct];
      localStorage.setItem('cart', JSON.stringify(storageProducts));
    }
  } else {
    const storageProducts = [newProduct];
    localStorage.setItem('cart', JSON.stringify(storageProducts));
  }
}
