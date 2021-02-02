function setProductState(product, amount) {
  const result = {
    id: product.id,
    title: product.title,
    amount,
    price: product.price,
    thumbnail: product.thumbnail.replace('I', 'O'),
    availableQuantity: product.available_quantity,
    shipping: product.shipping.free_shipping,
  };
  return result;
}
const localStorageSave = (nameLocal, product, id) => {
  const objectProduct = setProductState(product, 1);
  const arrayProduct = [];
  if (JSON.parse(localStorage.getItem(nameLocal)) === null) {
    arrayProduct.push(objectProduct);
    localStorage.setItem(nameLocal, JSON.stringify(arrayProduct));
  } else {
    const localProduct = JSON.parse(localStorage.getItem(nameLocal));
    if (localProduct.every((el) => el.id !== id)) {
      localProduct.push(objectProduct);
      localStorage.setItem(nameLocal, JSON.stringify(localProduct));
    } else {
      const result = localProduct.map((el) => {
        if (el.id === id) {
          el.amount += 1;
        }
        return el;
      });
      localStorage.setItem(nameLocal, JSON.stringify(result));
    }
  }
};

const localStorageDelete = (nameLocal, id, product) => {
  const result = product.filter((el) => {
    if (el.id !== id) {
      return el;
    }
    return '';
  });
  localStorage.setItem(nameLocal, JSON.stringify(result));
};

const localStorageSaveCarItems = (nameLocal, products) => {
  localStorage.setItem(nameLocal, JSON.stringify(products));
};

const localStorageLoad = (nameLocal) => {
  let localSave = '';
  if (typeof localStorage !== 'undefined') {
    if (localStorage.length > 0) {
      localSave = JSON.parse(localStorage.getItem(nameLocal));
    } else {
      console.log('No local');
    }
  } else {
    console.log('LocalStorage is not available!!');
  }
  return localSave;
};

export {
  localStorageLoad,
  localStorageSave,
  localStorageSaveCarItems,
  localStorageDelete,
};
