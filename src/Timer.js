import React, {Component} from 'react'


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 5};
  }

  tick() {
    if (this.state.seconds <= 0){
      this.setState({seconds:5})
    }
    this.setState(state => ({
      seconds: state.seconds - 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
         Form will be closed in: {this.state.seconds} second(s)
      </div>
    );
  }
}

export default Timer
