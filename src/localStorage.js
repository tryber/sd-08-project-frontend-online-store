const localStorageSave = (nameLocal, value) => {
  const nameProduct = { name: value };
  if (JSON.parse(localStorage.getItem(nameLocal)) === null) {
    localStorage.setItem(nameLocal, JSON.stringify(nameProduct));
  } else {
    let localProduct = JSON.parse(localStorage.getItem(nameLocal));
    localProduct = nameProduct;
    localStorage.setItem(nameLocal, JSON.stringify(localProduct));
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
