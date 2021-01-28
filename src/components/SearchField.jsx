import React from 'react';
import { Link } from 'react-router-dom';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <label htmlFor="search-field">
          <input type="text" name="search-field" id="search-field"
          />
        </label>
        <Link data-testid="shopping-cart-button" to="/pages/Cart">Search</Link>
      </div>
    );
  }
}

export default SearchField;
