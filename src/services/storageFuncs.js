export function updateStorageQuantity(name, value) {
  const parsedItems = JSON.parse(localStorage.cartItems);
  const index = parsedItems.findIndex(({ title }) => title === name);
  if (value === 0) {
    parsedItems.splice(index, 1);
  } else {
    parsedItems[index].quantity = value;
  }
  localStorage.cartItems = JSON.stringify(parsedItems);
}

export function updateStorageItem(item) {
  let parsedItems = JSON.parse(localStorage.cartItems);
  const NOT_FOUND = -1;
  const index = parsedItems.findIndex(({ title }) => title === item.title);
  if (index === NOT_FOUND) {
    parsedItems = [...parsedItems, { ...item, quantity: 1 }];
  } else {
    parsedItems[index].quantity += 1;
  }
  localStorage.cartItems = JSON.stringify(parsedItems);
}

export function totalValue() {
  const storageProducts = JSON.parse(localStorage.cartItems);
  function totalPrice(acc, crr) {
    acc += crr.price * crr.quantity;
    return acc;
  }
  return storageProducts.reduce(totalPrice, 0);
}
