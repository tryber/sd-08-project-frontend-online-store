import React from 'react';
import PropTypes from 'prop-types';

class CardProdutos extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${price}` }</p>
      </div>
    );
  }
}

CardProdutos.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardProdutos;
