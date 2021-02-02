import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductList extends Component {
  constructor() {
    super();

    this.mapList = this.mapList.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart({ target }) {
    const { value } = target;
    localStorage.setItem(JSON.parse(value).id, value);
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
            <Link
              to={ `/details/${product.id}` }
              data-testid="product-detail-link"
            >
              Ver detalhes...
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              value={ JSON.stringify(product, ['id', 'thumbnail', 'title', 'price']) }
              onClick={ this.addToCart }
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
    if (clicked) return (<div>{this.mapList()}</div>);
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
