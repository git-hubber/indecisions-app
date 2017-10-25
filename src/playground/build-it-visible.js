class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayToggle: false
    };

    this._toggleDisplay = this._toggleDisplay.bind(this);
  }

  _toggleDisplay() {
    this.setState((prevState) => {
      return { displayToggle: !prevState.displayToggle }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this._toggleDisplay}>
          {!this.state.displayToggle ? 'Show details' : 'Hide details' }
        </button>
        {this.state.displayToggle &&
        <div>
          Hey there, this is a simple JX accordian.
        </div>
        }
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let displayToggle = false;

// const _toggleDisplay = () => {
//   displayToggle = !displayToggle;
//   renderDOM();
// }

// const renderDOM = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={_toggleDisplay}>
//         {!displayToggle ? 'Show details' : 'Hide details' }
//       </button>
//       {displayToggle &&
//       <div>
//         Hey there, this is a simple JX accordian.
//       </div>
//       }
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// renderDOM();