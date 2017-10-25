import React from 'react';
import Option from './Option';

const OptionList = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button--link"
        onClick={props.removeAllOptions}
      >
        Remove All
      </button>
    </div>

    <p className="widget__message">
      {props.options.length > 0 ? props.options.length + ' option(s)' : 'Please add an option to get started!'}
    </p>
    {
      props.options.map((option, index) =>
        <Option
          deleteOption={props.deleteOption}
          key={option}
          index={index + 1}
          option={option}
        />
      )
    }
  </div>
)

export default OptionList;
