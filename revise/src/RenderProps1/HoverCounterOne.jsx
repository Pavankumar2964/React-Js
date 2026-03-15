import { Component } from "react";


export default class HoverCounterOne extends Component {
    render() {
        const { count, incrementCount, decrementCount, resetCount } = this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>Increment</button>
                <button onMouseOver={decrementCount}>Decrement</button>
                <button onMouseOver={resetCount}>Reset</button>
                <p>Count:{count}</p>

            </div>
        )
    }
}
