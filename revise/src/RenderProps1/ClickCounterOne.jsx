import { Component } from "react";

export default class ClickCounterOne extends Component {
  render() {
    const { count, incrementCount, decrementCount, resetCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
        <p>Count: {count}</p>
      </div>
    );
  }
}

