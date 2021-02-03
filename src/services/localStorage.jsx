export const readCart = () => JSON.parse(localStorage.getItem('cart'));

export const saveCart = (cart) => { localStorage.setItem('cart', JSON.stringify(cart)); };

export const addToCart = (product) => {
  const { id, title, price, thumbnail } = product;
  let cart = readCart();

  if (!cart) cart = [];
  const item = {
    id,
    title,
    price,
    thumbnail,
    amount: 1,
  };

  let unique = false;
  cart.forEach((element) => {
    if (item.id === element.id) {
      element.amount += 1;
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
