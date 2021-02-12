import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      details: [],
      general: [],
      rating: '',
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
    this.renderProduct = this.renderProduct.bind(this);
    this.renderLength = this.renderLength.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  handleReviews() {
    const { email, reviewText, rating } = this.state;
    const saveNewReviewsInState = this.state;
    const newReview = { email, reviewText, rating };
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
      rating: imprintReview.rating,
      reviewText: imprintReview.reviewText,
    }];
    this.setState(imprintReview);
    this.handleReviews();
  }

  getDetails() {
    const { match: { params: { id } } } = this.props;
    const { location: { state: { list } } } = this.props;

    const produto = list.find((item) => item.id === id);

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
    if (previousReviews === null) {
      previousReviews = [];
      return previousReviews;
    }
    return JSON.parse(previousReviews);
  }

  formHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderProduct() {
    const { general } = this.state;
    return (
      <>
        <h3>{general.title}</h3>
        <p>
          Preço: R$
          { general.price }
        </p>
        <img src={ general.thumbnail } alt="product" />
      </>
    );
  }

  renderLength() {
    const { cart } = this.props;
    return (
      <span data-testid="shopping-cart-size">
        {cart.length * 2 }
      </span>
    );
  }

  render() {
    const { details, general, reviews, email, reviewText, rating } = this.state;
    const { handleAddItemToCart } = this.props;

    return (
      <div data-testid="product-detail-name" className="atributes-container">
        { this.renderProduct() }
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
          email={ email }
          rating={ rating }
          reviewText={ reviewText }
        />
        { reviews !== ''
          ? reviews.map((item, index) => (
            <Reviews
              key={ index }
              email={ item.email }
              rating={ item.rating }
              reviewText={ item.reviewText }
            />)) : ''}
        <Link data-testid="shopping-cart-button" to="/shoppingcart">
          Cart
          { this.renderLength() }
        </Link>
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      list: PropTypes.arrayOf(PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.any),
        item: PropTypes.shape({
          id: PropTypes.string,
        }),
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        find: PropTypes.func,
      })),
    }),
  }).isRequired,
  handleAddItemToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductDetails;
