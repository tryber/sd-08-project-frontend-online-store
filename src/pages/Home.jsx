import React from 'react';
import { Header, Main, ButtonCategory } from '../components';
import '../css/Main-content.css';

import * as api from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: '',
      queryProduct: '',
      listProducts: [],
      buyProductsId: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.requestApi = this.requestApi.bind(this);
    this.handleChangeClickBuyProduct = this.handleChangeClickBuyProduct.bind(this);
  }

  componentDidUpdate(previousProp, previousState) {
    const { categoryID } = this.state;
    if (previousState.categoryID !== categoryID) {
      this.requestApi();
    }
  }

  handleChangeClickBuyProduct({ target }) {
    const { buyProductsId } = this.state;
    this.setState({ buyProductsId: [...buyProductsId, target.id] });
  }

  // handleChangeClickBuyProduct({ target }) {
  //   const { buyProductsId } = this.state;
  //   if (Object.keys(buyProductsId).includes(target.id)) {
  //     this.setState((state) => (
  //       {
  //         buyProductsId: {
  //         ...buyProductsId[target.id]: state.buyProductsId + 1
  //       }
  //     }
  //     ));
  //   } else {
  //     this.setState(() => (
  //       { buyProductsId: { [buyProductsId[target.id]]: 1 } }
  //     ));
  //   }
  // }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  requestApi() {
    const { queryProduct, categoryID } = this.state;
    api.getProductsFromCategoryAndQuery(categoryID, queryProduct)
      .then((resolve) => this.setState(
        { listProducts: resolve.results.length > 0 ? resolve.results : [],
          queryProduct: '' },
      ));
  }

  render() {
    const { queryProduct, listProducts, buyProductsId } = this.state;
    console.log(listProducts);
    return (
      <div>
        <Header
          queryProduct={ queryProduct }
          handleChange={ this.handleChange }
          requestApi={ this.requestApi }
          buyProductsId={ buyProductsId }
        />
        <div className="main-content">
          <ButtonCategory handleChange={ this.handleChange } />
          <Main
            listProducts={ listProducts }
            handleChangeClickBuyProduct={ this.handleChangeClickBuyProduct }
          />
        </div>
      </div>
    );
  }
}

export default Home;
