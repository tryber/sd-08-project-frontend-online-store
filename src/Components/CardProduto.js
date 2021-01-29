import React from 'react';
import PropTypes from 'prop-types';

export default class CardProduto extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="" />
        <span>{ `Preço: ${price}` }</span>
      </div>
    );
  }
}

CardProduto.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
