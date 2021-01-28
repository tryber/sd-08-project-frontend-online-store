import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartPage from './components/CartPage';
import './App.css';
import './services/api';
import TopNavBar from './components/TopNavBar';
import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => {
      this.setState(() => ({ categories: result }));
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <BrowserRouter>
        <TopNavBar />
        <ul className="categoriesList">
          { categories.map(({ name }) => (
            <li
              key={ name }
              className="categoriesItem"
            >
              {name}
            </li>
          ))}
        </ul>
        <Switch>
          <Route path="/shoppingCart" component={ CartPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
