import React from 'react';
import ShoppingCartLink from '../components/ShoppingCartLink';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      onCart: [],
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(product) {
    // const { onCart } = this.state;
    // this.setState({ onCart: [...onCart, product] });
    console.log('handleCart');
    this.setState((prevState) => {
      const isReapeated = prevState.onCart.find((productOnCart) => productOnCart.title === product.title);

      if (isReapeated === undefined) {
        const newList = prevState.onCart.concat(product);
        return {
          onCart: newList,
        };
      }
    });
  }

  increaseQuantity = (event) => {
    const { cartList } = this.state;
    let position;
    for (let index = 0; index < cartList.length; index++) {
      if (cartList[index].title === event.target.value) {
        position = index;
      }
    }
    // console.log(position);
    // console.log(cartList[position]);
    cartList[position].amount += 1;
    // console.log(cartList);
    this.setState({
      cartList,
    });
  };

  decreaseQuantity = (event) => {
    const { cartList } = this.state;
    let position;
    for (let index = 0; index < cartList.length; index++) {
      if (cartList[index].title === event.target.value) {
        position = index;
      }
    }
    // console.log(position);
    // console.log(cartList[position]);
    if (cartList[position].amount > 0) {
      cartList[position].amount -= 1;
    }
    // console.log(cartList);
    this.setState({
      cartList,
    });
  }

  deleteProduct = (event) => {
    const { cartList } = this.state;
    const productToDelete = cartList.find((product) => (event.target.value === product.title));
    const newList = cartList.filter((product) => product.title !== productToDelete.title);
    this.setState({
      cartList: newList,
    });
  }

  render() {
    const { onCart } = this.state;
    return (
      <div>
        <ShoppingCartLink
          onCart={ onCart }
          increaseQuantity={ this.increaseQuantity }
          decreaseQuantity={ this.decreaseQuantity }
          deleteProduct={ this.deleteProduct }
        />
        <ProductList addCart={ this.addCart } />
      </div>
    );
  }
}

export default Home;
