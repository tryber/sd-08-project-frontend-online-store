import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) {
  const { show } = props;

  return (
    <div>
      {show ? <div className="not-found">Não Encontrado...</div> : null}
    </div>
  );
}

NotFound.defaultProps = {
  show: false,
};

NotFound.propsType = {
  show: PropTypes.bool,
};
