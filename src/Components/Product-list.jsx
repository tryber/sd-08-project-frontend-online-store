import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  constructor() {
    super();

    this.mapList = this.mapList.bind(this);
    this.addToStorage = this.addToStorage.bind(this);
  }

  addToStorage({ target }) {
    const { id } = target;
    const { title } = id;
    console.log(title);
    localStorage.setItem([id], id);
  }

  mapList() {
    const { listProduct } = this.props;
    return (
      <div>
        { listProduct.results.map((product) => (
          <div key={ product.id } data-testid="product">
            <span>{ product.title }</span>
            <img src={ product.thumbnail } alt="" />
            <span>{ product.price }</span>
            <button
              type="button"
              data-testid="product-add-to-cart"
              id={ [{ id: product.id, title: product.title, thumbnail: product.thumbnail, price: product.price }] }
              onClick={ this.addToStorage }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { clicked } = this.props;
    if (clicked) return (<div>{ this.mapList() }</div>);
    return (
      <div>
        Nenhum produto foi encontrado
      </div>
    );
  }
}

ProductList.propTypes = {
  listProduct: PropTypes.arrayOf.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default ProductList;
