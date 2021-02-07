// const cartList = [];

export function addProdutc(product = {}) {
  const index = cartList.findIndex((procu) => product.id === procu.id);
  if (index >= 0) {
    cartList[index].quantity += 1;
    cartList[index].productPrice += product.price;
  } else {
    cartList.push({ ...product,
      quantity: 1,
      productPrice: product.price,
    });
  }
}

export function removeProdutc(product = {}) {
  if (!product) { return console.log('Não há produto nesse pedido'); }
  const index = cartList.findIndex((procu) => product.id === procu.id
    || product.title === procu.title);
  if (index >= 0) {
    cartList[index].quantity -= 1;
    cartList[index].productPrice -= cartList[index].price;
    if (cartList[index].quantity === 0) {
      cartList.splice(index, 1);
    }
  } else {
    console.log(`Produto ${product} não encontrado`);
  }
}
//  https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/
export function totalPrice() {
  const result = cartList.reduce((total, product) => product.produtoPrice + total, 0);
  return result;
}

// addCart({ id: 5, title: 'f', price: 1 });
// addCart({ id: 2, title: 'b', price: 2 });
// addCart({ id: 4, title: 'd', price: 50 });
// addCart({ id: 1, title: 'a', price: 10 });
// addCart({ id: 2, title: 'b', price: 2 });
// addCart({ id: 5, title: 'f', price: 1 });
// addCart({ id: 3, title: 'c', price: 45 });
// addCart({ id: 5, title: 'f', price: 1 });
// addCart({ id: 2, title: 'b', price: 2 });
// addCart({ id: 4, title: 'd', price: 50 });
// addCart({ id: 1, title: 'a', price: 10 });
// addCart({ id: 2, title: 'b', price: 2 });
// addCart({ id: 5, title: 'f', price: 1 });
// addCart({ id: 3, title: 'c', price: 45 });

// console.log(totalPrice());
// console.table(cartLog);
// removeProdutc({ id: 1 });
// removeProdutc({ title: 'a' });
// console.log(totalPrice());
// console.table(cartLog);
// addCart({ id: 1, title: 'a', price: 10 });
// removeProdutc({ title: 'c' });

// console.log(totalPrice());
// console.table(cartLog);
