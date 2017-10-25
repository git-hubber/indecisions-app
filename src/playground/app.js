
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  )
}

Header.defaultProps = {
  title: "yada"
}

const Action = (props) => {
  return (
    <div>
      <button
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
}

const OptionList = (props) => {
  return (
    <div>
      <button onClick={props.removeAllOptions}>
        Remove All
      </button>
      <p>
        {props.options.length > 0 ? props.options.length + ' options: ' : 'No options '}
      </p>
      <ol>
        {
          props.options.map((option) => <Option deleteOption={props.deleteOption} key={option} option={option} /> )
        }
      </ol>
    </div>
  )
}

const Option = (props) => {
  return (
    <li>
      {props.option}
      <button
        onClick={() => {
          props.deleteOption(props.option)
        }}
      >
        Delete
      </button>
    </li>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this._onFormSubmit = this._onFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }

  _onFormSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error }));
    if (!error) e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this._onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      randomOption: ''
    }
    this._removeAllOptions = this._removeAllOptions.bind(this);
    this._randomDecision = this._randomDecision.bind(this);
    this._addOption = this._addOption.bind(this);
    this._deleteOption = this._deleteOption.bind(this);
  }

  _removeAllOptions() {
    this.setState(() => ({ options: [] }) );
  }

  _randomDecision() {
    const randomNumber = Math.floor((Math.random() * this.state.options.length));
    this.setState((prevState) => ({randomOption: prevState.options[randomNumber]}));
  }

  _addOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState((prevState) => ({ options: [...prevState.options, option]}));
  }

  _deleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
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
        <Action
          hasOptions={this.state.options.length > 0 ? true : false}
          randomDecision={this._randomDecision}
          randomOption={this.state.randomOption}
        />
        <OptionList
          options={this.state.options}
          removeAllOptions={this._removeAllOptions}
          deleteOption={this._deleteOption}
        />
        <AddOption
          addOption={this._addOption}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));