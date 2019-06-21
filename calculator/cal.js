const arr = [
  { keyCode: 67, keyName: "clear", symbol: "C" },
  { keyCode: 47, keyName: "divide", symbol: "/" },
  { keyCode: 42, keyName: "multiply", symbol: "*" },
  { keyCode: 45, keyName: "subtract", symbol: "-" },
  { keyCode: 55, keyName: "seven", symbol: "7" },
  { keyCode: 56, keyName: "eight", symbol: "8" },
  { keyCode: 57, keyName: "nine", symbol: "9" },
  { keyCode: 43, keyName: "add", symbol: "+" },
  { keyCode: 52, keyName: "four", symbol: "4" },
  { keyCode: 53, keyName: "five", symbol: "5" },
  { keyCode: 54, keyName: "six", symbol: "6" },
  { keyCode: 46, keyName: "decimal", symbol: "." },
  { keyCode: 49, keyName: "one", symbol: "1" },
  { keyCode: 50, keyName: "two", symbol: "2" },
  { keyCode: 51, keyName: "three", symbol: "3" },
  { keyCode: 48, keyName: "zero", symbol: "0" },
  { keyCode: 47, keyName: "equals", symbol: "=" }
];
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expr: "",
      result: ""
    };
  }
  componentDidMount() {
    //document.getElementById("display").innerHTML = this.state.number;
  }
  handleClick = e => {
    if (e.target.dataset.value === "C") {
      this.setState({
        expr: "",
        result: "0"
      });
    } else if (e.target.dataset.value === ".") {
      if (/\.$/.test(this.state.expr)) {
        this.setState({
          expr: this.state.expr
        });
      } else {
        this.setState({
          expr: this.state.expr.concat(e.target.dataset.value)
        });
      }
    } else if (
      e.target.dataset.value !== "=" &&
      e.target.dataset.value !== "C"
    ) {
      if (
        /(\+|\*|\/|-)$/.test(this.state.expr) &&
        /(\+|-|\*|\/)/.test(e.target.dataset.value)
      ) {
        this.setState({
          expr: this.state.expr.replace(
            /(\+|\*|\/|-)+$/,
            e.target.dataset.value
          )
        });
      } else {
        this.setState({
          expr: this.state.expr
            .concat(e.target.dataset.value)
            .replace(/^0+/, "0")
        });
      }
    } else if (e.target.dataset.value === "=") {
      this.setState({
        result: eval(this.state.expr.replace(/^0+/, ""))
      });
    }
  };
  render() {
    return (
      <div id="calculator">
        <div id="display2" style={{ backgroundColor: "#758c74" }}>
          {this.state.expr}
        </div>
        <div id="display" ref={elem => (this.elem = elem)}>
          {this.state.result}
        </div>
        <div id="numbers" className="buttons">
          {arr.map(item => (
            <div key={item.keyName}>
              <button
                id={item.keyName}
                data-value={item.symbol}
                onClick={this.handleClick}
              >
                {item.symbol}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
class Display extends React.Component {
  render() {
    const { children, id, onClick } = this.props;
    return <button type="button">{children}</button>;
  }
}
ReactDOM.render(<Calculator />, document.getElementById("container"));
