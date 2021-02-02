import React from 'react';
import * as api from '../services/api';
import '../Home.css';
import IndexInputs from '../components.js/IndexInputs';
import ShowCategory from '../components.js/ShowCategory';
import ShowProducts from '../components.js/ShowProducts';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleProducts = this.handleProducts.bind(this);

    this.state = {
      categories: [],
      products: [],
      value: '',
      category: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { category, value } = this.state;
    const product = (await api.getProductsFromCategoryAndQuery(category, value))
      .results;
    this.setState({
      products: product,
    });
  }

  async handleProducts(id) {
    const { value } = this.state;
    const category = (await api.getProductsFromCategoryAndQuery(id, value))
      .results;
    console.log(id);
    this.setState({
      products: category,
    });
  }

  render() {
    const { categories, products } = this.state;
    const { handleProducts, handleChange, handleClick } = this;

    return (
      <div>
        <IndexInputs
          handleChange={ handleChange }
          handleClick={ handleClick }
        />
        <div className="homepage">
          <ShowCategory
            categories={ categories }
            handleProducts={ handleProducts }
          />
          <ShowProducts products={ products } />
        </div>
      </div>
    );
  }
}

// comentário para criar uma pull request nova

export default Home;