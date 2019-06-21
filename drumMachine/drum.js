const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="header">
          <b>React</b>ive Drum Machine
        </div>
        <div id="buttons">
          {bankOne.map(obj => (
            <div key={obj.keyCode}>
              <Audio src={obj.url} value={obj.keyCode} name={obj.id}>
                {obj.keyTrigger}
              </Audio>
            </div>
          ))}
        </div>
        <div id="display" />
      </div>
    );
  }
}
class Audio extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnMount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = e => {
    if (e.keyCode === this.props.value) {
      this.audRef.play();
      this.btn.focus();
      //setTimeout(() => this.btn.focus(), 100);
      document.getElementById("display").innerHTML = this.props.name;
    }
  };
  playSound = e => {
    const sound = document.getElementById(this.props.children);
    sound.currentTime = 0;
    sound.play();
    document.getElementById("display").innerHTML = this.props.name;
  };
  render() {
    const { children, src, value, name } = this.props;
    return (
      <button
        onKeyDown={this.handleKeyPress}
        onClick={this.playSound}
        className="drum-pad btn btn-danger"
        id={name}
        ref={input => (this.btn = input)}
      >
        <audio
          ref={input => (this.audRef = input)}
          id={children}
          src={src}
          className="clip"
        />
        <i class="fas fa-drum-steelpan" />
        {children}
      </button>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
