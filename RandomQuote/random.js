class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myquotes: [],
      selectedQuote: null
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then(response => response.json())
      .then(data => this.setState({ myquotes: data.quotes }));
  }
  handleSubmit() {
    this.setState({
      clicked: true
    });
  }
  render() {
    const { myquotes } = this.state;
    return (
      <React.Fragment>
        <ul>
          {myquotes.map(quote => (
            <li key={quote.author}>
              <p>
                {quote.quote} BY {quote.author}
              </p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<RandomQuote />, document.getElementById("container"));
