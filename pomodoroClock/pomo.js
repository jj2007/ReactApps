class Pomodoro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breaks: 5,
      session: 25
    };
  }
  render() {
    return (
      <div id="clock">
        <header>Pomodoro Clock</header>
        <div id="break-label">
          <h2>Break Length</h2>
          <Display>{this.state.breaks}</Display>
          <Button>
            <i class="fas fa-arrow-circle-up" />
            Up
          </Button>
          <Button>
            <i class="fas fa-arrow-circle-down" />
            Down
          </Button>
        </div>
        <div id="session-label">
          <h2>Session Length</h2>
          <Display>{this.state.session}</Display>
          <Button>
            <i class="fas fa-arrow-circle-up" />
            Up
          </Button>
          <Button>
            <i class="fas fa-arrow-circle-down" />
            Down
          </Button>
        </div>
        <Timer
          id="timer-label"
          breaks={this.state.breaks}
          session={this.state.session}
        />
        <PlayPause id="controls" />
      </div>
    );
  }
}
const Button = ({ id, className, children }) => (
  <button id={id} className={className}>
    {children}
  </button>
);

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, breaks, session } = this.props;
    return (
      <div id={id}>
        <div id="timerdisplay">
          <h2>Session Time</h2>
        </div>
        <div id="timeleft" />
      </div>
    );
  }
}
class PlayPause extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button id="start_stop">play</button>
        <button id="start_stop">pause</button>
        <button id="reset">reset</button>
      </div>
    );
  }
}
const Display = ({ id, children }) => (
  <div id={id} className="display">
    {children}
  </div>
);

ReactDOM.render(<Pomodoro />, document.getElementById("container"));
