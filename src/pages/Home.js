import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../cart-icon.png';
import * as api from '../services/api';
import '../Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => (
      this.setState({
        categories,
      })
    ));
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <input id="inputText" type="text" />
        <Link to="/cartcheckout" data-testid="shopping-cart-button">
          <img src={ cartIcon } alt="cart icon" className="cartIcon" />
        </Link>
        <p htmlFor="inputText" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </p>
        <ul>
          {categories.map((category) => (
            <li key={ category.name } data-testid="category">
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
