import React from 'react';
import Rating from './Rating';
import StarsContainer from './StarsContainer';

class RatingProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchField: '',
      // productsList: [],
      // categories: [],
      // radioValue: '',
      // cartItems: [],
      productsRated: [],
      productRating: [],
      email: '',
      comment: '',
      stars: '0',
    };
    // this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleStarsInput = this.handleStarsInput.bind(this);
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.handleRatingAndCommentProduct = this.handleRatingAndCommentProduct.bind(this);
  }

  // componentDidMount() {
  //   this.getLocalStorage();
  // }

  componentWillUnmount() {
    this.setLocalStorageState();
  }

  handleEmailInput(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleCommentInput(event) {
    this.setState({
      comment: event.target.value,
    });
  }

  handleStarsInput(event) {
    this.setState({
      stars: event.target.value,
    });
  }

  handleRatingAndCommentProduct(event) {
    event.preventDefault();
    const { email, comment, stars, productRating } = this.state;
    const { productsList, id } = this.props;
    // console.log(this.props);
    productRating.push({
      product: productsList.find((item) => item.id === id),
      rating: {
        email,
        stars,
        comment,
      }, // Objeto com comentarios, email e estrelas
    });
    this.setState({
      productRating,
    });
    this.setLocalStorageState();
  }

  getLocalStorage() {
    const productRating = JSON.parse(localStorage.getItem('ratingProducs'));
    this.setState({ productRating });
  }

  setLocalStorageState() {
    const { productRating } = this.state;
    // console.log(myState);
    localStorage.setItem('ratingProducs', JSON.stringify(productRating));
  }

  renderRatingForm() {
    return (
      <div>
        <StarsContainer
          handleStarsInput={ this.handleStarsInput }
        />
        <input type="text" name="email" id="email" onChange={ this.handleEmailInput } />
        <input
          type="text"
          name="message"
          id="message"
          onChange={ this.handleCommentInput }
        />
        <input
          type="submit"
          value="submit"
          onClick={ this.handleRatingAndCommentProduct }
        />
      </div>
    );
  }

  render() {
    const { productRating } = this.state;
    const { productsList } = this.props;
    const { id } = this.props;
    // console.log(productRating);
    const comments = productsList.filter((e) => e.id === id);
    const isCommented = productRating.some((e) => e.id === id);
    return (
      <div>
        {
          productRating.length > 0
            ? productRating.map((e) => (
              <Rating key={ productRating.indexOf(e) } data-testid="product-detail-evaluation" product={ e } />
              // <div key={ productRating.indexOf(e) } data-testid="product-detail-evaluation">
              //   <p>{e.product.id}</p>
              //   <p>{e.rating.comment}</p>
              //   <p>{e.rating.stars}</p>
              // </div>
            ))
            : <div />
        }
        <StarsContainer
          handleStarsInput={ this.handleStarsInput }
        />
        <input type="text" name="email" id="email" onChange={ this.handleEmailInput } />
        <input
          type="text"
          name="message"
          id="message"
          onChange={ this.handleCommentInput }
        />
        <input
          type="submit"
          value="Avaliar"
          onClick={ this.handleRatingAndCommentProduct }
        />
      </div>
    );
  }
}

export default RatingProduct;
