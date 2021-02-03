export async function getCart() {
  return new Promise((resolve) => {
    resolve(JSON.parse(localStorage.getItem('cart')) || {});
  });
}

export async function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
