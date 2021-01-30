import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const iconStyle = {
      display: 'inline-block',
      position: 'absolute',
      right: '10px',
      top: '10px',
      overflow: 'hidden',
      height: '2em',
      width: '2em',
      fill: '#888888',
    };
    const roda1 = 'M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 '
                  + '1.343-3 3-3s3 1.343 3 3z';
    const roda2 = 'M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 '
                  + '1.343-3 3-3s3 1.343 3 3z';
    const cesto = 'M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 '
                  + '0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 '
                  + '0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z';
    return (
      <svg style={ iconStyle }>
        <defs>
          <symbol id="icon-cart" viewBox="0 0 32 32">
            <path d={ roda1 } />
            <path d={ roda2 } />
            <path d={ cesto } />
          </symbol>
        </defs>
        <use xlinkHref="#icon-cart" />
      </svg>
    );
  }
}

export default ShoppingCart;
