import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';

import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      details: [],
      general: [],
      selected: false,
      email: '',
      reviewText: '',
      reviews: [],
    };

    this.getDetails = this.getDetails.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.saveReviews = this.saveReviews.bind(this);
    this.loadReviews = this.loadReviews.bind(this);
    this.handleReviews = this.handleReviews.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  handleReviews() {
    const { email, reviewText, selected } = this.state;
    const saveNewReviewsInState = this.state;
    const newReview = { email, reviewText, selected };
    const loadedReviews = this.loadReviews();
    loadedReviews.push(newReview);
    this.saveReviews(loadedReviews);
    saveNewReviewsInState.reviews = loadedReviews;
    this.setState(saveNewReviewsInState);
  }

  handlerSubmit(event) {
    event.preventDefault();
    const imprintReview = this.state;
    imprintReview.reviews = [{
      email: imprintReview.email,
      selected: imprintReview.selected,
      reviewText: imprintReview.reviewText,
    }];
    this.setState(imprintReview);
    this.handleReviews();
  }

  async getDetails() {
    const { match: { params: { id } } } = this.props;

    const params = id.split('&');

    const produto = await api
      .getProductsFromCategoryAndQuery(params[1], params[0]).then((data) => data.results
        .find((item) => item.id === params[1]));

    this.setState({
      details: produto.attributes,
      general: produto,
    });
  }

  saveReviews(newReview) {
    localStorage.setItem('savedReviews', JSON.stringify(newReview));
  }

  loadReviews() {
    let previousReviews = localStorage.getItem('savedReviews');
    if (!previousReviews) {
      previousReviews = [];
    }
    return JSON.parse(previousReviews);
  }

  formHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { details, general, reviews } = this.state;
    const { handleAddItemToCart } = this.props;

    return (
      <div data-testid="product-detail-name" className="atributes-container">
        <h3>{general.title}</h3>
        <p>
          Preço: R$
          { general.price }
        </p>
        <img src={ general.thumbnail } alt="product" />
        <div className="atributos">
          Detalhes
          {details
            .map((detail, index) => (
              <ul key={ index }>
                <p>
                  {detail.name}
                  :
                  {detail.value_name}
                </p>
              </ul>))}
          <Link to="/"><button type="button">Voltar</button></Link>
          <button
            data-testid="product-detail-add-to-cart"
            onClick={ () => handleAddItemToCart(general) }
            type="button"
          >
            Adicionar ao carrinho
          </button>
        </div>
        <ReviewForm
          formHandler={ this.formHandler }
          handlerSubmit={ this.handlerSubmit }
          email={ this.state.email }
          selected={ this.state.selected }
          reviewText={ this.state.reviewText }
        />
        { reviews !== ''
        ? reviews.map((item, index) => (
          <Reviews
            key={ index }
            email={ item.email }
            selected={ item.selected }
            reviewText={ item.reviewText }
          />)) : ''}
        <Link data-testid="shopping-cart-button" to="/shoppingcart">Cart</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
