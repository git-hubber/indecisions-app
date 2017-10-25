import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.index}. {props.option}</p>
    <button
      className="button--link"
      onClick={() => {
        props.deleteOption(props.option)
      }}
    >
      Remove
    </button>
  </div>
)

export default Option;