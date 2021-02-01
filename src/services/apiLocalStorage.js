export const readCart = () => JSON.parse(localStorage.getItem('cart'));

export const saveCart = (cart) => {
  if (!cart) cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const addToCart = (product) => {
  let cart = readCart();
  if (!cart) cart = [];

  const { id, title, price, thumbnail } = product;
  const item = { id, title, price, thumbnail, qtd: 1 };

  let unique = true;
  cart.forEach((cartItem) => {
    if (item.id === cartItem.id) {
      cartItem.qtd += 1;
      unique = false;
    }
  });

  if (unique) cart.push(item);
  saveCart(cart);
};
