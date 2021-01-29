import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  constructor() {
    super();

    this.mapList = this.mapList.bind(this);
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
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { clicked } = this.props;
    if (clicked) return (<div>{ this.mapList() }</div>);
    return (<div>Nenhum produto foi encontrado</div>);
  }
}

ProductList.propTypes = {
  listProduct: PropTypes.arrayOf.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default ProductList;
