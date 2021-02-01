import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListaCardProdutos from '../components/ListaCardProdutos';

// import * as api from '../services/api';

class Listagem extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     categories: [],
  //     listOfProducts: [],
  //     query: undefined,
  //     category: undefined,
  //   };

  //   this.createAllCategories = this.createAllCategories.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  //   this.fetchProducts = this.fetchProducts.bind(this);
  //   this.handleClickCategory = this.handleClickCategory.bind(this);
  // }

  // componentDidMount() {
  //   const { fetchProducts } = this.props;
  //   this.createAllCategories(this.handleClickCategory);
  //   fetchProducts();
  // }

  // handleClick(e) {
  //   const { fetchProducts } = this.props;
  //   e.preventDefault();
  //   fetchProducts();
  // }

  // async handleClickCategory(e) {
  //   const { query } = this.state;
  //   if (query === undefined) {
  //     await this.setState({
  //       category: e.target.id,
  //       query: '',
  //     });
  //     this.fetchProducts();
  //   } else {
  //     await this.setState({
  //       category: e.target.id,
  //     });
  //     this.fetchProducts();
  //   }
  // }

  // handleChange(e) {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // async fetchProducts() {
  //   try {
  //     const { category, query } = this.state;
  //     const produtos = await api.getProductsFromCategoryAndQuery(category, query)
  //       .then((data) => data.results);
  //     const produtosx = produtos.map((prod) => (
  //       { id: prod.id,
  //         title: prod.title,
  //         thumbnail: prod.thumbnail,
  //         price: prod.price,
  //         shipping: prod.shipping.free_shipping,
  //         installments: prod.installments,
  //       }));
  //     this.setState({
  //       listOfProducts: produtosx,
  //     });
  //   } catch (error) {
  //     return undefined;
  //   }
  // }

  // async createAllCategories(onClick) {
  //   const itemList = await api.getCategories();
  //   const spanList = itemList.map((data) => (
  //     <button
  //       type="button"
  //       key={ data.id }
  //       id={ data.id }
  //       data-testid="category"
  //       onClick={ onClick }
  //     >
  //       { data.name }
  //     </button>));
  //   this.setState({ categories: spanList });
  // }

  render() {
    const { listOfProducts, addToCart } = this.props;
    return (
      <>
        {/* <div className="left-content">
          <div className="categories-list">
            {categories}
          </div>
        </div> */}
        <div className="right-content">
          <div className="show-products">
            <ListaCardProdutos
              listOfProducts={ listOfProducts }
              addToCart={ addToCart }
            />
          </div>
        </div>
      </>
    );
  }
}

Listagem.propTypes = {
  listOfProducts: PropTypes.arrayOf(PropTypes.object),
  addToCart: PropTypes.func.isRequired,
};

Listagem.defaultProps = {
  listOfProducts: undefined,
};

export default Listagem;
