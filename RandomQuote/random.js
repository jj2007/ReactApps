class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myquotes: ["Winning isn’t everything, but wanting to win is."],
      selectedQuote: "",
      author: "",
      clicked: false
    };
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ myquotes: data.quotes }));
  }

  handleClick = () => {
    const rand = Math.floor(Math.random() * this.state.myquotes.length);
    this.setState({
      clicked: true,
      selectedQuote: this.state.myquotes[rand].quote,
      author: this.state.myquotes[rand].author
    });
  };
  render() {
    const { myquotes } = this.state;
    return (
      <div id="quote-box">
        <div>
          <h1 id="text">{this.state.selectedQuote}</h1>
          <h1 id="author">{this.state.author}</h1>
        </div>
        <button onClick={this.handleClick}>NewQuote</button>
      </div>
    );
  }
}

ReactDOM.render(<RandomQuote />, document.getElementById("container"));
