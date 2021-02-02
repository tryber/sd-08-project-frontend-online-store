import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import * as api from '../services/api';
import ShopCartButton from '../components/ShopCartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      productInfo: {},
      isLoading: true,
      email: '',
      rating: '',
      message: '',
    };
    this.addProductCart = this.addProductCart.bind(this);
    this.saveAvaliation = this.saveAvaliation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getProductsFromAPI();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  getProductsFromAPI() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const ids = id.split('&');
    const category = ids[0];
    const productID = ids[1];

    this.setState({ isLoading: true }, async () => {
      const products = await api.getProductsFromCategoryAndQuery(
        category,
        undefined,
      );
      const productFilter = products.results.filter(
        (product) => product.id === productID,
      );
      this.setState({
        productInfo: productFilter,
        isLoading: false,
      });
    });
  }

  addProductCart() {
    const { productInfo: product } = this.state;
    let itensFromLocalStorage = [];
    if (localStorage.length !== 0) {
      itensFromLocalStorage = JSON.parse(localStorage.products);
      const productInCart = itensFromLocalStorage.filter(
        (item) => item.id === product[0].id,
      );
      if (productInCart.length === 0) {
        localStorage.setItem('products',
          JSON.stringify([...itensFromLocalStorage, product[0]]));
      }
    } else {
      localStorage.setItem('products',
        JSON.stringify([...itensFromLocalStorage, product[0]]));
    }
  }

  saveAvaliation() {
    const { productInfo, email, message, rating } = this.state;
    const avaliation = { email, message, rating };
    const { id } = productInfo[0];
    if (localStorage.comments) {
      const comments = JSON.parse(localStorage.comments);
      if (comments[id]) { // Caso já exista um comentario sobre esse produto apenas irá adicionar mais um ao array
        comments[id] = [...comments[id], avaliation];
      } else { // Caso não tenha irá criar uma chave no objeto comments para o produto que está sendo avalidado e adicionar o primeiro comentário ao array de comentários
        const comment = [];
        comment.push(avaliation);
        comments[id] = comment;
      }
      localStorage.setItem('comments', JSON.stringify(comments)); // sobrescreve o localStorage.comments com o novo array contendo os novos comentários
    } else {
      const comment = [];
      comment.push(avaliation);
      const comments = {
        [id]: comment,
      };
      localStorage.setItem('comments', JSON.stringify(comments)); // caso não exista nenhum comentário de nenhum produto irá criar um atributo comments no LocalStorage já adicionando o primeiro comentário
    }
  }

  renderProductDetails(product) {
    const { title, thumbnail, price, attributes } = product[0];
    return (
      <div className="product-card" data-testid="product">
        <ShopCartButton />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt="product model" />
        <h4>{ price }</h4>
        <ul>
          {attributes.map((attribute) => (
            <li key={ attribute.name }>
              {attribute.name}
              :
              { attribute.value_name}
            </li>
          ))}
        </ul>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addProductCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }

  renderFormAvaliation() {
    return (
      <form>
        <input
          type="email"
          placeholder="Digite seu email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="number"
          min="1"
          max="5"
          name="rating"
          onChange={ this.handleChange }
        />
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem Opcional"
          name="message"
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.saveAvaliation }>Avaliar</button>
      </form>
    );
  }

  renderComment(comment, index) {
    const { email, rating, message } = comment;
    return (
      <li key={ index }>
        <p>
          Email:
          {email}
        </p>

        <p>
          Nota:
          {rating}
        </p>

        <p>
          Mensagem:
          {message}
        </p>
        <br />
        <br />
        <br />
        <br />
      </li>
    );
  }

  renderAllComments(product) {
    if (!localStorage.comments) {
      return '';
    }
    const allComments = JSON.parse(localStorage.comments);
    const exactProductComment = allComments[product[0].id];
    if (!exactProductComment) {
      return '';
    }
    return (
      <ul>
        {exactProductComment.map(((comment, i) => this.renderComment(comment, i)))}
      </ul>
    );
  }

  render() {
    const { productInfo, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : this.renderProductDetails(productInfo)}
        {this.renderFormAvaliation()}
        {isLoading ? <Loading /> : this.renderAllComments(productInfo)}
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
};

export default ProductDetails;
