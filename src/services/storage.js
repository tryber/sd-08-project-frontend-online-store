export default function addStorage(product) {
  const { title, price } = product;
  const newProduct = { title, price };
  if (localStorage.getItem('cart')) {
    let storageProducts = JSON.parse(localStorage.getItem('cart'));
    storageProducts = [...storageProducts, newProduct];
    localStorage.setItem('cart', JSON.stringify(storageProducts));
  } else {
    const storageProducts = [newProduct];
    localStorage.setItem('cart', JSON.stringify(storageProducts));
  }
}
