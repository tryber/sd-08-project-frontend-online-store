export const readCart = () => JSON.parse(localStorage.getItem('cart'));

export const saveCart = (cart) => {
  if (!cart) cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const addToCart = (product) => {
  let cart = readCart();
  if (!cart) cart = [];

  const { id, title, price, thumbnail, evaluation, feedback } = product;
  const item = {
    id,
    title,
    price,
    thumbnail,
    amount: 1,
    totalAmount: product.available_quantity,
    evaluation,
    feedback,
  };

  let unique = false;
  cart.forEach((cartItem) => {
    if (item.id === cartItem.id) {
      cartItem.amount += 1;
      unique = true;
    }
  });

  if (!unique) cart.push(item);
  saveCart(cart);
};

export const showQuantInCart = () => {
  const cart = readCart();
  const zero = 0;
  if (cart) {
    return (cart
      .reduce((previous, { amount }) => previous + amount, zero));
  }
  return zero;
};
