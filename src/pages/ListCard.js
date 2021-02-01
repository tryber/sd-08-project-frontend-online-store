import React from 'react';
import PropTypes from 'prop-types';

class ListCard extends React.Component {
  render() {
    const { item: { title, price, thumbnail } } = this.props;
    return (

      <span data-testid="product">
        <p>{ title }</p>
        <img alt="item" src={ thumbnail } />
        <p>{`R$${price}`}</p>
      </span>
    );
  }
}

ListCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ListCard;
