import React from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
    };

    this.onClickEvent = this.onClickEvent.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  onClickEvent() {
    const { onClick } = this.props;
    const { item } = this.state;
    onClick(item);
  }

  updateItem(item) {
    this.setState({
      item,
    });
  }

  render() {
    const { item } = this.state;
    return (
      <form>
        <input
          className="main-container search-bar"
          data-testid="query-input"
          value={ item }
          onChange={ (e) => this.updateItem(e.target.value) }
        />
        <button
          type="button"
          className="search-bar-button"
          data-testid="query-button"
          onClick={ (e) => {
            e.preventDefault();
            this.onClickEvent();
          } }
        >
          <BsSearch />
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
