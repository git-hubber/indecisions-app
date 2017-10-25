const appRoot = document.getElementById('app');

const app = {
  options: [],
}
const _onFormSubmit = (e) => {
  e.preventDefault();
  console.log("perfect");
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderDOM();
  }

}

const _removeAllOptions = () => {
  app.options = [];
  renderDOM();
}

let randomOption = '';

const _randomDecision = () => {
  const randomNumber = Math.floor((Math.random() * app.options.length));
  randomOption = app.options[randomNumber];
  renderDOM();
}

const renderDOM = () => {
  const template = (
    <div>
      <button
        onClick={_randomDecision}
        disabled={app.options.length == 0}
      >
        What should I do?
      </button>
      <p>
        <b>
          {
            randomOption
          }
        </b>
        <br/>
        {app.options.length > 0 ? app.options.length + ' options: ' : 'No options '}
        <button onClick={_removeAllOptions}>Remove All</button>
      </p>
      <ol>
        {
          app.options.map((option) => {
              return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={_onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderDOM();
