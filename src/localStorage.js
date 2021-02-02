const localStorageSave = (nameLocal, product, id) => {
  const objectProduct = { idProduct: id, prod: product, amount: 1 };
  const arrayProduct = [];
  if (JSON.parse(localStorage.getItem(nameLocal)) === null) {
    arrayProduct.push(objectProduct);
    localStorage.setItem(nameLocal, JSON.stringify(arrayProduct));
  } else {
    const localProduct = JSON.parse(localStorage.getItem(nameLocal));
    if (localProduct.every((el) => el.idProduct !== id)) {
      localProduct.push(objectProduct);
      localStorage.setItem(nameLocal, JSON.stringify(localProduct));
    } else {
      const result = localProduct.map((el) => {
        console.log(`${el.idProduct} --- ${id}`);
        if (el.idProduct === id) {
          el.amount += 1;
        }
        return el;
      });
      localStorage.setItem(nameLocal, JSON.stringify(result));
    }
  }
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

export { localStorageLoad, localStorageSave };
