import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import './TopNavBar.css';

class TopNavBar extends React.Component {
  render() {
    const { cartSize } = this.props;
    return (
      <div className="topNavBar">
        <ul className="topNavList">
          <li className="topNavIcon logo">
            <Link to="/">LOGO</Link>
          </li>
          <li className="topNavIcon cart">
            <CartIcon />
            (
            { cartSize }
            )
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNavBar;
