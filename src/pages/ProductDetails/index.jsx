import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
// import * as api from '../../services/api';
import Loading from '../../components/Loading';
import ButtonAddCart from '../../components/ButtonAddCart';

const fetchAPI = 'https://api.mercadolibre.com/items/';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      product: {},
    };
    this.responseFromAPI = this.responseFromAPI.bind(this);
  }

  componentDidMount() {
    this.responseFromAPI();
  }

  async responseFromAPI() {
    const { match: { params: { id } } } = this.props;
    const responseAPI = await fetch(`${fetchAPI}/${id}`);
    const response = await responseAPI.json();
    this.setState(
      {
        loading: false,
        product: response,
      },
    );
  }

  render() {
    const { loading, product } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <div>
          <h3>Detalhamento do produto</h3>
          <h2 data-testid="product-detail-name">
            {product.title}
          </h2>
          <img
            src={ product.thumbnail }
            alt={ `imagem de ${product.title}` }
          />
          <h4>
            R$
            {' '}
            { product.price }
          </h4>
          <ul>
            <h2>Detalhes Técnicos</h2>
            {product.attributes.map((attribute) => (
              <p key={ attribute.id }>
                {attribute.name}
                :
                {'  '}
                {attribute.value_name}
              </p>
            ))}
          </ul>
        </div>
        <ButtonAddCart productInfo={ product } addProductToCart={  }/>
        <Button />
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
