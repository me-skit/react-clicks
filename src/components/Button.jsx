import React from 'react';
import '../stylesheets/Button.css'

function Button({ text, clickButton, clickHandler }) {
  return(
    <button
      className={clickButton ? 'btn-click' : 'btn-reset'}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;