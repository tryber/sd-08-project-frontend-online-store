import React from 'react';

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <label htmlFor="search-field">
          <input
            type="text"
            name="search-field"
            id="search-field"
          />
        </label>
      </div>
    );
  }
}

export default SearchField;
