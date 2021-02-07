import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import ButtonCart from '../components/ButtonCart';
import Header from '../components/Header';
import AddItem from '../components/AddItem';
import ProductEvaluation from '../components/ProductEvaluation';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itensOnCart: 0,
    };
    this.updateItensOnCart = this.updateItensOnCart.bind(this);
  }

  componentDidMount() {
    this.updateItensOnCart();
  }

  updateItensOnCart() {
    let itensOnCart = 0;
    if ({}.hasOwnProperty.call(sessionStorage, 'itensOnCart')) {
      itensOnCart = JSON.parse(sessionStorage.getItem('itensOnCart'));
    }
    this.setState({ itensOnCart });
  }

  render() {
    const {
      location: {
        state: { title, image, price, attributes },
      },
    } = this.props;
    const { itensOnCart } = this.state;
    return (
      <section>
        <Header />
        <ButtonCart itensOnCart={ itensOnCart } />
        <div className="details-container">
          <img src={ image } alt="" />
          <div className="title-price">
            <h2 data-testid="product-detail-name">{title}</h2>
            <span>{price}</span>
          </div>
          <AddItem
            title={ title }
            price={ price }
            dataTestId="product-detail-add-to-cart"
            updateItensOnCart={ this.updateItensOnCart }
          />
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
        <ProductEvaluation />
      </section>
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
