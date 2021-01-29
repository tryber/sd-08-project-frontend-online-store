import React from 'react';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.Submit = this.Submit.bind(this);
  }

  Submit(event) {
    const { onClick } = this.props;
    onClick(event);
  }

  render() {
    const { key, value } = this.props;
    return (
      <div>
        <input
          type="radio"
          name="category"
          value={ value }
          id={ key }
          data-testid="category"
          onClick={ this.Submit }
        />
        <label htmlFor={ key }>{ value }</label>
      </div>
    );
  }
}

export default CategoryList;
