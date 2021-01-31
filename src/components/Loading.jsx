import React from "react";
import PropTypes from "prop-types";

export default function Loading(props) {
  const { show } = props;

  return (
    <div>{show ? <div className="loading">Carregando...</div> : null}</div>
  );
}

Loading.defaultProps = {
  show: false,
};

Loading.propsType = {
  show: PropTypes.bool,
};
