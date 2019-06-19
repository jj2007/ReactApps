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
        <div id="buttons">
          {bankOne.map(obj => (
            <div>
              <Audio key={obj.keyTrigger} src={obj.url}>
                {obj.keyTrigger}
              </Audio>
            </div>
          ))}
        </div>
        <div id="display">
          <p>Test</p>
        </div>
      </div>
    );
  }
}
class Audio extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }
  handleKey(e) {
    if (e.keyCode === this.props.key) {
      this.playSound();
    }
  }
  playSound = e => {
    const sound = document.getElementById(this.props.children);
    sound.currentTime = 0;
    sound.play();
  };
  render() {
    const { children, src, key } = this.props;
    return (
      <div onClick={this.playSound} className="drum-pad">
        <audio id={children} src={src} />
        {children}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
