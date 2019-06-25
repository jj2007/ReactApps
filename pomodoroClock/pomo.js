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
  reset = aud => {
    this.setState({
      breaks: 5,
      session: 25
    });
    clearInterval(this.mytimer);
    aud.pause();
    aud.currentTime = 0;
  };
  render() {
    return (
      <div id="clock">
        <header>
          <h1>Pomodoro Clock</h1>
          <h3>Be Productive</h3>
        </header>
        <div id="break-label">
          <h2>Break Time</h2>
          <button
            className="btn btn-danger"
            onClick={this.handleBreakUp}
            id="break-increment"
          >
            <i className="fas fa-arrow-circle-up" />
            Up
          </button>
          <Display id="break-length">{this.state.breaks}</Display>
          <button
            className="btn btn-danger"
            onClick={this.handleBreakDown}
            id="break-decrement"
          >
            <i className="fas fa-arrow-circle-down" />
            Down
          </button>
        </div>
        <div id="session-label">
          <h2>Session Time</h2>
          <button
            className="btn btn-danger"
            onClick={this.handleSessionUp}
            id="session-increment"
          >
            <i className="fas fa-arrow-circle-up" />
            Up
          </button>
          <Display id="session-length">{this.state.session}</Display>
          <button
            className="btn btn-danger"
            onClick={this.handleSessionDown}
            id="session-decrement"
          >
            <i className="fas fa-arrow-circle-down" />
            Down
          </button>
        </div>
        <PlayPause
          id="controls"
          breaks={this.state.breaks}
          session={this.state.session}
          parentreset={this.reset}
        />
      </div>
    );
  }
}

class PlayPause extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: parseInt(this.props.session * 60, 10),
      timerState: "stopped",
      timerRunning: "session"
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.session !== prevProps.session) {
      this.setState((timeLeft, session) => ({
        timeLeft: parseInt(this.props.session * 60, 10)
      }));
    }
  }
  componentWillUnmount() {
    clearInterval(this.mytimer);
  }

  startTimer = () => {
    if (this.state.timerState === "stopped") {
      if (this.state.timerRunning == "session" && this.newTime == 0) {
        this.setState({ timerRunning: "break" });
      } else {
        this.setState({ timerRunning: "session" });
      }
      this.setState({ timerState: "running" });
      this.mytimer = setInterval(() => {
        console.log("2: Inside of setInterval");
        const newTime = this.state.timeLeft - 1;
        if (newTime == 0) {
          clearInterval(this.mytimer);
          this.audioRef.play;
          this.setState({ timerState: "stopped" });
        }
        this.setState({ timeLeft: newTime });
      }, 1000);
      console.log("1: After setInterval");
    }
  };

  stopTimer = () => {
    clearInterval(this.mytimer);
    this.setState({
      timerState: "stopped"
    });
  };

  resetTimer = () => {
    this.setState({
      timeLeft: parseInt(this.props.session * 60, 10),
      timerState: "stopped"
    });
    clearInterval(this.mytimer);
    this.props.parentreset(this.audioRef);
  };
  render() {
    const { id, session, breaks } = this.props;
    let mintoDisplay;
    let sectoDisplay;
    if (this.state.timeLeft / 60 < 10) {
      mintoDisplay = "0".concat(parseInt(this.state.timeLeft / 60, 10));
    } else if (this.state.timeLeft / 60 >= 10) {
      mintoDisplay = parseInt(this.state.timeLeft / 60, 10);
    }
    if (this.state.timeLeft % 60 < 10) {
      sectoDisplay = "0".concat(parseInt(this.state.timeLeft % 60, 10));
    } else {
      sectoDisplay = parseInt(this.state.timeLeft % 60, 10);
    }
    if (this.state.timeLeft == 0) {
      this.audioRef.play;
    }
    return (
      <div id="timer-label">
        <div id="time-left">
          <h2>{this.state.timerRunning}</h2>
          <h2>
            <b>
              {mintoDisplay}:{sectoDisplay}
            </b>
          </h2>
        </div>
        <div id="timecontrol" />
        <button id="start_stop" class="btn" onClick={this.startTimer}>
          <i class="fas fa-play-circle fa-2x" />
        </button>
        <button id="start_stop" class="btn" onClick={this.stopTimer}>
          <i class="fas fa-pause-circle fa-2x" />
        </button>
        <button id="reset" class="btn" onClick={this.resetTimer}>
          <i class="fas fa-sync-alt fa-2x" />
        </button>
        <audio
          ref={aud => (this.audioRef = aud)}
          id="beep"
          preload="auto"
          src="https://goo.gl/6NNLMG"
        />
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
