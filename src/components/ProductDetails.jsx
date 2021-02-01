import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchProduct(
      JSON.parse(localStorage.getItem('products')).results
        .find((result) => result.id === id),
    );
  }

  fetchProduct(result) {
    this.setState(
      { loading: true },
      async () => {
        this.setState({
          product: await result,
          loading: false,
        });
      },
    );
  }

  renderProduct(product) {
    return (
      <section className="product-detail">
        <h4 data-testid="product-detail-name">{ product.title }</h4>
        <img alt="Product" src={ product.thumbnail } />
        <p>{`R$ ${(product.price).toFixed(2)}`}</p>
        <div className="technical-info-container">
          <h6>Especificação Técnica</h6>
          {product.attributes
            .map((attribute) => (
              <p key={ attribute.name }>
                {
                  `${attribute.name}: ${attribute.value_name}`
                }
              </p>))}
        </div>
      </section>
    );
  }

  render() {
    const { product, loading } = this.state;
    if (!loading)console.log(product);

    return (
      loading ? 'Carregando...' : this.renderProduct(product)
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
