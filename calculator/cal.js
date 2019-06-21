const arr = [
  { keyCode: 48, keyName: "zero" },
  { keyCode: 48, keyName: "one" },
  { keyCode: 48, keyName: "two" },
  { keyCode: 48, keyName: "three" },
  { keyCode: 48, keyName: "four" },
  { keyCode: 48, keyName: "five" },
  { keyCode: 48, keyName: "six" },
  { keyCode: 48, keyName: "seven" },
  { keyCode: 48, keyName: "eight" },
  { keyCode: 48, keyName: "nine" }
];
const operators = [
  { symbol: "+", method: "add" },
  { symbol: "-", method: "subtract" },
  { symbol: "x", method: "multiply" },
  { symbol: "/", method: "divide" },
  { symbol: ".", method: "decimal" },
  { symbol: "C", method: "clear" }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  handleClick = e => {
    this.setState({
      number: e.target.value
    });
    //this.elem.innerHTML = this.state.number;
    document.getElementById("display").innerHTML = this.state.number;
  };
  render() {
    return (
      <div id="calculator">
        <div id="display" ref={elem => (this.elem = elem)}>
          {" "}
        </div>
        <div id="numbers" className="buttons">
          {arr.map((item, index) => (
            <div key={item.toString()}>
              <button id={item} onClick={this.handleClick}>
                {index}
              </button>
            </div>
          ))}
          {operators.map(obj => (
            <div key={obj.method}>
              <button id={obj.method} onClick={this.handleClick}>
                {obj.symbol}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
class Button extends React.Component {
  render() {
    const { children } = this.props;
    return <button type="button">{children}</button>;
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
