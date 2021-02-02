import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((state) => ({
      ...state, [name]: value,
    }));
  }

  handleClick() {
    const { searchText } = this.state;
    const { onClick } = this.props;
    onClick({ id: searchText, query: '' });
  }

  renderInputSearch() {
    const { searchText } = this.state;
    return (
      <div>
        <input
          value={ searchText }
          type="search"
          name="searchText"
          id="id-search"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="query-button"
        >
          Pesquisar!
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderInputSearch()}
      </div>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
