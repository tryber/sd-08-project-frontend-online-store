import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

import { useSelector, useDispatch } from "react-redux";
import { parseCart } from "../helpers/helpers";
import { actionClear, actionAdd, actionRemove } from "../store/cart.reducer";
import Header from "../components/Header";

// input.reduce((total, value) => {
//   total[value] = (total[value] || 0) + 1;
//   return total;
// }, {});

export default function Debug() {
  const cart = useSelector((state) => state.cart);
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  // console.log(cart);

  const handleClearCart = () => {
    dispatch(actionClear());
  };

  return (
    <main>
      <Header showLogo={false} showBack />
      <div>
        {parseCart(cart).map((i, index) => (
          <div key={index}>
            {JSON.stringify(i)}
            <br />
          </div>
        ))}
      </div>

      <br />
      <br />
      <button type="button" onClick={() => dispatch(actionAdd({ id: "1223" }))}>
        Add
      </button>
      <br />
      <input
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="remove id"
      />

      <button type="button" onClick={() => dispatch(actionRemove(id))}>
        Remove
      </button>
      <br />
      <button type="button" onClick={handleClearCart}>
        Limpar
      </button>
    </main>
  );
}

// Cart.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     category_id: PropTypes.string,
//     thumbnail: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     mercadopago: PropTypes.bool.isRequired,
//     images: PropTypes.arrayOf(PropTypes.string).isRequired,
//     attributes: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string,
//         value: PropTypes.string,
//       }),
//     ),
//   }).isRequired,
// };
