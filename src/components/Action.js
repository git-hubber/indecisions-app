import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={!props.hasOptions}
      onClick={props.randomDecision}
    >
      What should I do?
    </button>
    <p>
      {props.randomOption}
    </p>
  </div>
)

export default Action;