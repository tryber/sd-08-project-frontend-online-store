import React from 'react';
import PropTypes from 'prop-types';

import AddProduct from '../components/AddProduct';
import Loading from '../components/Loading';
import Header from '../components/Header';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.products.bind(this);
    const { match: { params: { id } } } = this.props;
    this.state = {
      productId: id,
      productInfo: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { productId } = this.state;
    const fetchedProduct = await fetch(`https://api.mercadolibre.com/items?ids=${productId}`);
    fetchedProduct.json().then((product) => this.products(product[0].body));
  }

  products(array) {
    this.setState({
      productInfo: array,
      loading: false,
    });
  }

  render() {
    const { productInfo, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <>
        <Header />
        <section>
          <h1 data-testid="product-detail-name">{ productInfo.title }</h1>
          <img src={ productInfo.thumbnail } alt="Imagem do produto" />
          <p>{ `R$ ${productInfo.price.toFixed(2)}` }</p>
          <AddProduct item={ productInfo } testid="product-detail-add-to-cart" />
          <h3>Especificacoes Tecnicas</h3>
        </section>
      </>
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
