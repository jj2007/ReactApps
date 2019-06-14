class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    };
  }

  render() {
    return (
      <div id="text">
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

class RandomQuote extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <Quote showNextQuote={this.props} />
        <Qtweet />
        <NewQuote />
      </div>
    );
  }
}

ReactDOM.render(<RandomQuote />, document.getElementById("container"));
