import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';

class ProductDetails extends Component {
  render() {
    const {
      location: {
        state: { title, image, price, attributes },
      },
    } = this.props;
    return (
      <div className="details-container">
        <img src={ image } alt="" />
        <div className="title-price">
          <h2 data-testid="product-detail-name">{title}</h2>
          <span>{price}</span>
        </div>
        <div className="atributes">
          <h3>Especificações Técnicas</h3>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name} : ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      attributes: PropTypes.arrayOf(Object).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
