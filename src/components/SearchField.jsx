import React from 'react';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { handleInputChange } = this.props;
    return (
      <label htmlFor="search-field">
        <input
          data-testid="query-input"
          type="text"
          name="search-field"
          id="search-field"
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

export default SearchField;
