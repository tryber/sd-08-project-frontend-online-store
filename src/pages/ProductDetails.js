import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RateProduct from './Components/RateProduct';

class ProductDetails extends React.Component {
  renderDefaultProps() {
    const { location } = this.props;
    if (!location.state) {
      const state = {
        title: 'Product',
        price: 0,
        thumbnail: 'no-image',
        attributes: [{
          name: 'Sem dados nome',
          value_name: 'Você clicou em algum card?',
          id: 'no-info',
        }],
      };
      location.state = state;
    }
  }

  render() {
    this.renderDefaultProps();
    const {
      location: {
        state: { title, price, thumbnail, attributes },
      },
    } = this.props;
    return (
      <section className="main-container product-detail">
        <h1 data-testid="product-detail-name" className="product-detail-title">
          {title}
        </h1>
        <div className="product-detail-left">
          <img className="product-detail-img" src={ thumbnail } alt={ title } />
          <p className="product-detail-price">
            Price: R$
            {price}
          </p>
        </div>
        <div className="product-detail-right">
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                {`${attribute.name}
                :
                ${attribute.value_name}`}
              </li>
            ))}
          </ul>
        </div>
        <RateProduct />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
};

export default withRouter(ProductDetails);
