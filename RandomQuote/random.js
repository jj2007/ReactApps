class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myquotes: [],
      selectedQuote: "Winning isn’t everything, but wanting to win is.",
      author: "Vince Lombardi",
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
        <div id="display">
          <div id="text">{this.state.selectedQuote}</div>
          <div id="author">{this.state.author}</div>
        </div>
        <div id="mybuttons">
          <button
            className="btn btn-primary"
            id="new-quote"
            onClick={this.handleClick}
          >
            <i className="fa fa-quote-right" />
            NewQuote
          </button>
          <Button
            currentQuote={this.state.selectedQuote}
            currentAuthor={this.state.author}
          />
        </div>
      </div>
    );
  }
}
class Button extends React.Component {
  render() {
    return (
      <div>
        <a
          id="tweet-quote"
          target="_blank"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${
            this.props.currentQuote
          }--${this.props.currentAuthor}`}
        >
          <button className="btn btn-info" type="button">
            <i className="fa fa-twitter" />Tweet
          </button>
        </a>
      </div>
    );
  }
}
ReactDOM.render(<RandomQuote />, document.getElementById("container"));
