import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class ListCards extends Component {
  render() {
    const { productprop } = this.props;
    const { title, price, thumbnail } = productprop;
    return (
      <section data-testid="product" className="section-card">
        <p>{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          { price }
        </p>
      </section>
    );
  }
}

ListCards.propTypes = {
  productprop: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ListCards;
