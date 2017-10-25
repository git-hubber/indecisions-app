import React, { Component } from 'react';

import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import OptionList from './OptionList';
import OptionModal from './OptionModal';

class App extends Component {
  state = {
    options: [],
    randomOption: undefined
  }

  _removeAllOptions = () => {
    this.setState(() => ({ options: [] }) );
  }

  _randomDecision = () => {
    const randomNumber = Math.floor((Math.random() * this.state.options.length));
    this.setState((prevState) => ({randomOption: prevState.options[randomNumber]}));
  }

  _addOption = (option) => {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({ options: [...prevState.options, option]}));
  }

  _deleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  _clearRandomOption = () => {
    this.setState(() => ({ randomOption: undefined }));
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      if (json) {
        const options = JSON.parse(json);
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length !== prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log("unmounted");
  }

  render() {
    const title = "Indecisions";
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header
          title={title}
          subTitle={subTitle}
        />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0 ? true : false}
            randomDecision={this._randomDecision}
            randomOption={this.state.randomOption}
          />
          <div className="widget">
            <OptionList
              options={this.state.options}
              removeAllOptions={this._removeAllOptions}
              deleteOption={this._deleteOption}
            />
            <AddOption
              addOption={this._addOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.randomOption}
          clearRandomOption={this._clearRandomOption}
        />
      </div>
    )
  }
}

export default App;