import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
    };
    this.handleClickCart = this.handleClickCart.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handleClickCart(title, price, id) {
    this.addProduct(title, price, id);
    this.setState(({ productsCart }) => ({
      productsCart: [...productsCart],
    }), () => {
      const { productsCart } = this.state;
      localStorage.setItem('productsCart', JSON.stringify(productsCart));
    });
  }

  addProduct(title, price, id) {
    const { productsCart } = this.state;
    let newProduct = productsCart.find((product) => product.id === id);

    if (newProduct) {
      newProduct.quant += 1;
      this.setState({
        productsCart: [...productsCart],
      });
    } else {
      newProduct = {
        title,
        price,
        id,
        quant: 1,
      };
      this.setState({
        productsCart: [...productsCart, newProduct],
      });
    }
  }

  render() {
    const { products, query, categoryID } = this.props;
    return (
      <div>
        { products
          .map((product) => (<ProductCard
            onClick={ this.handleClickCart }
            key={ product.id }
            product={ product }
            query={ query }
            category={ categoryID }
          />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  categoryID: PropTypes.string.isRequired,
};

export default ProductList;
