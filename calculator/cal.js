const arr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
const operators = [
  { symbol: "+", method: "add" },
  { symbol: "-", method: "subtract" },
  { symbol: "x", method: "multiply" },
  { symbol: "/", method: "divide" },
  { symbol: ".", method: "decimal" }
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
  };
  render() {
    return (
      <>
        <>
          {arr.map((item, index) => (
            <div key={item.toString()}>
              <button id={item} onClick={this.handleClick}>
                {index}
              </button>
            </div>
          ))}
        </>
        <>
          {operators.map(obj => (
            <div key={obj.method}>
              <button id={obj.method} onClick={this.handleClick}>
                {obj.symbol}
              </button>
            </div>
          ))}
        </>
      </>
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
