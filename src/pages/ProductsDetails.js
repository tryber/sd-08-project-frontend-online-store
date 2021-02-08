import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shoppingCartIcon from '../images/shoppingCartIcon.png';
import Rating from '../components/Rating';
import Evaluations from '../components/Evaluations';

class ProductsDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      amount: 1,
      email: '',
      rate: '',
      comment: '',
      evaluations: [],
    };

    this.addProduct = this.addProduct.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleRating(event) {
    event.preventDefault();
    const { email, rate, comment, evaluations } = this.state;
    const evaluation = { email, rate, comment };
    this.setState({
      evaluations: [...evaluations, evaluation],
    });
  }

  addProduct(queryResult) {
    const { cart } = this.state;
    this.setState({
      cart: [...cart, queryResult],
    });
  }

  render() {
    const { cart, amount, email, rate, comment, evaluations } = this.state;
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div>
        <Link
          to={ { pathname: '/shopping-cart/', cart, amount } }
          data-testid="shopping-cart-button"
        >
          <img src={ shoppingCartIcon } alt="shopping-cart" className="shopping-cart" />
        </Link>
        <fieldset>
          <legend>Detalhes do produto</legend>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <img src={ thumbnail } alt="Product Pic" />
          <p>{ price }</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.addProduct(product) }
          >
            Adicionar ao carrinho
          </button>
        </fieldset>
        <Rating
          email={ email }
          rate={ rate }
          comment={ comment }
          handleChange={ this.handleChange }
          handleRating={ this.handleRating }
        />
        <Evaluations evaluations={ evaluations } />
      </div>
    );
  }
}

ProductsDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }).isRequired }).isRequired,
  }).isRequired,

};

export default ProductsDetails;
