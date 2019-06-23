class Pomodoro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breaks: 5,
      session: 25
    };
  }
  handleBreakUp = () => {
    if (this.state.breaks !== 60) {
      this.setState({
        breaks: parseInt(this.state.breaks, 10) + 1
      });
    }
  };
  handleBreakDown = () => {
    if (this.state.breaks !== 5) {
      this.setState({
        breaks: parseInt(this.state.breaks, 10) - 1
      });
    }
  };
  handleSessionUp = () => {
    if (this.state.session !== 60) {
      this.setState({
        session: parseInt(this.state.session, 10) + 1
      });
    }
  };
  handleSessionDown = () => {
    if (this.state.session !== 25) {
      this.setState({
        session: parseInt(this.state.session, 10) - 1
      });
    }
  };
  render() {
    return (
      <div id="clock">
        <header>
          <h1>Pomodoro Clock</h1>
        </header>
        <div id="break-label">
          <h2>Break Length</h2>
          <button className="btn btn-danger" onClick={this.handleBreakUp}>
            <i className="fas fa-arrow-circle-up" />
            Up
          </button>
          <Display>{this.state.breaks}</Display>
          <button className="btn btn-danger" onClick={this.handleBreakDown}>
            <i className="fas fa-arrow-circle-down" />
            Down
          </button>
        </div>
        <div id="session-label">
          <h2>Session Length</h2>
          <button className="btn btn-danger" onClick={this.handleSessionUp}>
            <i className="fas fa-arrow-circle-up" />
            Up
          </button>
          <Display>{this.state.session}</Display>
          <button className="btn btn-danger" onClick={this.handleSessionDown}>
            <i className="fas fa-arrow-circle-down" />
            Down
          </button>
        </div>
        <Timer
          id="timer-label"
          breaks={this.state.breaks}
          session={this.state.session}
        />
        <PlayPause
          id="controls"
          breaks={this.state.breaks}
          session={this.state.session}
        />
      </div>
    );
  }
}

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
  startTimer = () => {};
  stopTimer = () => {};
  resetTimer = () => {};
  render() {
    const { id, breaks, sessionsl } = this.props;
    return (
      <div id={id}>
        <button id="start_stop" class="btn" onClick={this.startTimer}>
          <i class="fas fa-play-circle" />
          play
        </button>
        <button id="start_stop" class="btn" onClick={this.stopTimer}>
          <i class="fas fa-pause-circle" />
          pause
        </button>
        <button id="reset" class="btn" onClick={this.resetTimer}>
          <i class="fas fa-sync-alt" />
          reset
        </button>
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
