import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ButtonStar from './ButtonStar';

const INIT_STARS = [true, true, true, true, true];
const DEF_STARS = [false, false, false, false, false];

export default function InputStars(props) {
  const { handleChange } = props;
  const [stars, setStars] = useState(INIT_STARS);
  const handleStarClick = (value) => {
    const aux = [...DEF_STARS].fill(true, 0, value);
    setStars(aux);
    if (handleChange) {
      handleChange(aux.filter((i) => i === true).length);
    }
  };
  return (
    <div className="input-starts">
      <ButtonStar star={ stars[0] } value={ 1 } handleClick={ handleStarClick } />
      <ButtonStar star={ stars[1] } value={ 2 } handleClick={ handleStarClick } />
      <ButtonStar star={ stars[2] } value={ 3 } handleClick={ handleStarClick } />
      <ButtonStar star={ stars[3] } value={ 4 } handleClick={ handleStarClick } />
      <ButtonStar star={ stars[4] } value={ 5 } handleClick={ handleStarClick } />
    </div>
  );
}

InputStars.defaultProps = {
  handleChange: null,
};

InputStars.propTypes = {
  handleChange: PropTypes.func,
};
