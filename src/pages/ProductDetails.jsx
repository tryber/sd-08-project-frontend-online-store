import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import CartButton from '../components/CartButton';
import RatingProduct from '../components/RatingProductDetails';

class ProductDetails extends React.Component {
  constructor() {
    super();
    const { cartItems } = JSON.parse(localStorage.getItem('myState'));
    this.state = {
      searchField: '',
      productsList: [],
      categories: [],
      radioValue: '',
      cartItems,
      productRating: [],
    };
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
    // this.handleRatingAndCommentProduct = this.handleRatingAndCommentProduct.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  componentWillUnmount() {
    this.setLocalStorageState();
  }

  async handleAddItemToCart(event) {
    const { cartItems, productsList } = this.state;
    cartItems.push(productsList.find((item) => item.id === event.target.value));
    console.log(cartItems);
    this.setState({
      cartItems,
    });
  }

  // async handleRatingAndCommentProduct(event) {
  //   event.preventDefault();
  //   const { productsList, productRating } = this.state;
  //   console.log(productsList);
  //   productRating.push({
  //     product: productsList.find((item) => item.id === event.target.value),
  //     rating: {
  //       email: this.handleEmailInput(),
  //       stars: this.handleStarsInput(),
  //       comment: this.handleCommentInput(),
  //     }, // Objeto com comentarios, email e estrelas
  //   });
  //   this.setState({
  //     productRating,
  //   });
  // }

  getLocalStorage() {
    const myState = JSON.parse(localStorage.getItem('myState'));
    this.setState(myState);
  }

  setLocalStorageState() {
    const myState = JSON.stringify(this.state);
    // console.log(myState);
    localStorage.setItem('myState', myState);
  }

  render() {
    const { location: { state: {
      id, title, thumbnail, price, attributes, address, condition, productsList,
      handleProductRating,
      // available_quantity, sold_quantity, stop_time, accepts_mercadopago,
      // currency_id, shipping
    } } } = this.props;
    // console.log(this.props);
    const { cartItems, productRating } = this.state;
    return (
      <section data-testid="product-detail-name">
        <Link to="/">Voltar</Link>
        <img src={ thumbnail } alt={ title } />
        <h3>{price}</h3>
        <ul>
          {
            attributes.map((att) => (
              <li key={ att.id }>
                <span>{title}</span>
                <span>{att.id}</span>
                <span>{att.name}</span>
              </li>))
          }
        </ul>
        <AddToCartButton
          // data-testid="product-detail-add-to-cart"
          handleAddItemToCart={ this.handleAddItemToCart }
          // productsList={ productsList }
          id={ id }
          title={ title }
          thumbnail={ thumbnail }
          price={ price }
          attributes={ attributes }
          address={ address }
          condition={ condition }
        />
        <CartButton cartItems={ cartItems } />
        <RatingProduct
          productRating={ productRating }
          productsList={ productsList }
          handleProductRating={ handleProductRating }
          id={ id }
        />
      </section>
    );
  }
}

ProductDetails.propTypes = {
  handleAddItemToCart: PropTypes.func,
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
      attributes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        value_name: PropTypes.string,
        value_id: PropTypes.string,
        source: PropTypes.number,
      })),
      // available_quantity: PropTypes.number,
      // sold_quantity: PropTypes.number,
      // stop_time: PropTypes.string,
      // accepts_mercadopago: PropTypes.bool,
      // currency_id: PropTypes.string,
      condition: PropTypes.string,
      address: PropTypes.shape({
        state_id: PropTypes.string,
        state_name: PropTypes.string,
        city_id: PropTypes.string,
        city_name: PropTypes.string,
      }),
      shipping: PropTypes.shape({
        free_shipping: PropTypes.bool,
        mode: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        logistic_type: PropTypes.string,
        store_pick_up: PropTypes.bool,
      }),
    }),
  }),
}.isRequired;

export default ProductDetails;
