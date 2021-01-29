import React from 'react';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <label htmlFor="search-field">
        <input
          data-testid="query-input"
          type="text"
          name="search-field"
          id="search-field"
        />
      </label>
    );
  }
}

export default SearchField;
