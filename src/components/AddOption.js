import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  }

  _onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error }));
    if (!error) e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form onSubmit={this._onFormSubmit} className="add-option">
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOption;