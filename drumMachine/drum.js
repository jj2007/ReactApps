class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="drum-machine">
        <div id="buttons">
          <Button>Q</Button>
          <Button>W</Button>
          <Button>E</Button>
          <Button>A</Button>
          <Button>S</Button>
          <Button>D</Button>
          <Button>Z</Button>
          <Button>X</Button>
          <Button>C</Button>
        </div>
        <div id="display">
          <p>Test</p>
        </div>
      </div>
    );
  }
}
class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleKey, children } = this.props;
    return (
      <button onClick={handleKey} className="drum-pad">
        {children}
      </button>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
