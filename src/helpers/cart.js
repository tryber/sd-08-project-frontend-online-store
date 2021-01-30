const DEF_CART_KEY = 'CART_ITENS';

const loadCart = () => {
  const cart = JSON.parse(localStorage.getItem(DEF_CART_KEY)) || [];
  return cart;
};

const exists = (productId) => {
  const cart = loadCart();
  if (cart.length === 0) return false;
  return cart.some((i) => i.id === productId);
};

const add = (product) => {
  if (!exists(product.id) && product) {
    const cart = loadCart();
    cart.push(product);
    localStorage.setItem(DEF_CART_KEY, JSON.stringify(cart));
  }
};

const remove = (product) => {
  if (exists(product.id) && product) {
    const cart = loadCart();
    const aux = cart.filter((i) => i.id !== product.id);
    localStorage.setItem(DEF_CART_KEY, JSON.stringify(aux));
  }
};

const clear = () => {
  localStorage.removeItem(DEF_CART_KEY);
};

module.exports = {
  exists,
  add,
  remove,
  loadCart,
  clear,
};
