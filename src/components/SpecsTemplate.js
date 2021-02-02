import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

class SpecsTemplate extends Component {
  addCart(item) {
    const productID = `Product${item.id}`;
    localStorage.setItem(productID, JSON.stringify(item));
  }

  render() {
    const { itemInfo } = this.props;
    const { thumbnail, title, price } = itemInfo;
    return (
      <div>
        <img src={ thumbnail } alt="imagem do produto" />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{ price }</p>
        <button
          type="submit"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addCart(itemInfo) }
        >
          Adicionar ao Carrinho
        </button>
        <Review itemId={ itemInfo.id } />
      </div>
    );
  }
}

export default SpecsTemplate;

SpecsTemplate.defaultProps = {
  itemInfo: {},
};

SpecsTemplate.propTypes = {
  itemInfo: PropTypes.object,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
