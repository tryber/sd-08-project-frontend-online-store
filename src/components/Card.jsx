import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <span>{title}</span>
        <span>{`R$${price.toFixed(2)}`}</span>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
};

Card.defaultProps = {
  product: {
    title: '',
    thumbnail: '',
    price: '',
  },
};

export default Card;
