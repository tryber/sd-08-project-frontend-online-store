import React from 'react';
import PropTypes from 'prop-types';

class ItemCard extends React.Component {
  render() {
    const { title, img, price } = this.props;
    console.log(this.props);
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img alt="" src={ img } />
        <p>{price}</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
