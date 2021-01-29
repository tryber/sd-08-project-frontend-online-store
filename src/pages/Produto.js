import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Produto extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {title: 'Pequeno Principe, O'},
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const { id } = this.props.match.params;
      const produto = await api.getProduct(id);
      this.setState({
        product: produto,
      });
    } catch (error) {
      return undefined;
    }
  }
  render() {
    const { product } = this.state;
    return (
      <>
        <header className="header">
        {/* <NavBar /> */}
        <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
        </header>
        <span data-testid='product-detail-name'>
          { product && product.title }
          {console.log(product.title)}
        </span>
      </>
    );
  }
}

export default Produto;
