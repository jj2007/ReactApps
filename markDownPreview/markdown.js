class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: ""
    };
  }
  handleChange = e => {
    this.setState({
      mytext: e.target.value
    });
  };
  render() {
    const { mytext } = this.state;
    return (
      <div>
        <Editor mytext={mytext} handleChange={this.handleChange} />
        <Preview mytext={mytext} />
      </div>
    );
  }
}
class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { mytext, handleChange } = this.props;
    return (
      <div>
        <input type="text" value={mytext} onChange={handleChange} id="editor" />
      </div>
    );
  }
}
class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="preview">
        <p>{this.props.mytext}</p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
