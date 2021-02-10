import React from 'react';

class Reviews extends React.Component {
  render() {
    const { email, reviewText, selected } = this.props;

    return (
      <div>
        <span>{ email }</span>
        <form>
          <input readOnly type="radio" name="selected" value="1" checked={selected === "1"}/>
          <input readOnly type="radio" name="selected" value="2" checked={selected === "2"}/>
          <input readOnly type="radio" name="selected" value="3" checked={selected === "3"}/>
          <input readOnly type="radio" name="selected" value="4" checked={selected === "4"}/>
          <input readOnly type="radio" name="selected" value="5" checked={selected === "5"}/>
        </form>
        <p data-testid="product-detail-evaluation">{ reviewText }</p>
        <hr/>
      </div>
    );
  }
}

export default Reviews;
