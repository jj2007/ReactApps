class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mytext: placeholder
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
        <textarea value={mytext} onChange={handleChange} id="editor" />
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
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(this.props.mytext) }}
      />
    );
  }
}
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
marked.setOptions({
  breaks: true
});
ReactDOM.render(<App />, document.getElementById("container"));
