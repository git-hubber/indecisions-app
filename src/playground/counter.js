class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne   = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset    = this.reset.bind(this);

    this.state = {
      count: 0
    }
  }

  addOne() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 }
    });
  }

  reset() {
    // this.setState({ count: 0 });
    // this.setState({ count: this.state.count + 1 });
    this.setState(() => {
      return { count: 0 }
    });
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 }
    // });
  }

  componentWillMount() {
    const count = parseInt(localStorage.getItem('count'), 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      localStorage.setItem('count', this.state.count);
    }
  }

  render() {
    return (
      <div>
      <h1>Count: {this.state.count}</h1>
      <button
              className="button"
              onClick={this.addOne}
            >
              +1
            </button>

            <button
              className="button"
              onClick={this.minusOne}
            >
              -1
            </button>

            <button
              className="button"
              onClick={this.reset}
            >
              Reset
            </button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button
//         className="button"
//         onClick={addOne}
//       >
//         +1
//       </button>

//       <button
//         className="button"
//         onClick={minusOne}
//       >
//         -1
//       </button>

//       <button
//         className="button"
//         onClick={reset}
//       >
//         Reset
//       </button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();