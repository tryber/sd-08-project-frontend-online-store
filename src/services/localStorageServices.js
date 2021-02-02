export function saveCartInLocalStorage(cartItems) {
  // if (!localStorage.getItem('cart')) {
  //   localStorage.setItem('cart', JSON.stringify(0));
  // }
  // const currentStorage = JSON.parse(localStorage.getItem('cart'));
  // console.log(currentStorage);
  // const updatedStorage = currentStorage.push({ id, productName, price, amount });
  // localStorage.cart = JSON.stringify(updatedStorage);
  localStorage.cart = JSON.stringify(cartItems);
}

export function getCartFromLocalStorage() {
  return JSON.parse(localStorage.cart);
}

// export default { saveCartInLocalStorage, getCartFromLocalStorage };
