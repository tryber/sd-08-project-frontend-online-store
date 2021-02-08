import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
      general: [],
    };

    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getDetails();
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

  render() {
    const { details, general } = this.state;
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
          <button type="button">Adicionar ao Carrinho</button>
        </div>
        <Link to="/shoppingcart">Carrinho de compras</Link>
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
