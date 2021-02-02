import React from 'react';
import CheckoutList from '../components/CheckoutList';

class Checkout extends React.Component {

  accessLocalStorageQuantity() {
    const quantity = JSON.parse(localStorage.quantity);
    return quantity;
  }

  accessLocalStorageProducts() {
    const products = JSON.parse(localStorage.products);
    return products;
  }

  caculateTotalPrice(quantity) {
    let totalPrice = 0;
    quantity.forEach((objQuantity) => {
      const key = Object.keys(objQuantity)[0];
      totalPrice = totalPrice + (objQuantity[key].quantity * objQuantity[key].price);
    })
    return totalPrice;
  }


  render() {
    const products = this.accessLocalStorageProducts();
    const quantity = this.accessLocalStorageQuantity();
    return (
      <div>
        <ul>
          {products.map((product, index) => <CheckoutList key={index} product={product} quantity={quantity[index][product.id].quantity} />)}
        </ul>
        <h1>Preço Total: R$ {this.caculateTotalPrice(quantity)}</h1>
      </div>
    )
  }
}

export default Checkout;
