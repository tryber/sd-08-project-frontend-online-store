import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import ShoppingCartLink from '../components/ShoppingCartLink';
import EvaluationForm from '../components/EvaluationForm';
import EvaluationList from '../components/EvaluationList';
import ButtonAddToCart from '../components/ButtonAddToCart';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      comment: '',
      rating: '0',
      evaluation: this.loadEvaluation(),
    };
  }

  updateField = (field, newValue) => {
    this.setState({ [field]: newValue });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      evaluation: prevState.evaluation.concat([{
        comment: prevState.comment,
        rating: prevState.rating,
      }]),
    }));
  }

  loadEvaluation = () => ((localStorage.evaluation)
    ? JSON.parse(localStorage.getItem('evaluation'))
    : [])

  saveEvaluation = () => {
    const { evaluation } = this.state;
    localStorage.setItem('evaluation', JSON.stringify(evaluation));
  }

  render() {
    const { location: { state: { productObj } }, addCart, sumAmount } = this.props;
    const { attributes } = productObj;
    return (
      <div>
        <ShoppingCartLink sumAmount={ sumAmount } />
        <div data-testid="product-detail-name">
          <ProductCard product={ productObj } />
        </div>
        <div>
          <ul>
            Especificações Técnicas
            {attributes.map((attribute) => (
              <li
                key={ attribute.id }
              >
                {`${attribute.name}: ${attribute.value_name}`}
              </li>))}
          </ul>
          <ButtonAddToCart
            dataTestId="product-detail-add-to-cart"
            addCart={ addCart }
            product={ productObj }
          />
        </div>
        <EvaluationForm
          updateField={ this.updateField }
          handleSubmit={ this.handleSubmit }
          state={ this.state }
        />
        <EvaluationList saveEvaluation={ this.saveEvaluation } state={ this.state } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productObj: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
    }).isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  sumAmount: PropTypes.number,
};

ProductDetails.defaultProps = {
  sumAmount: 0,
};

export default ProductDetails;
