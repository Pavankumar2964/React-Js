import { Component } from "react";
import HocComp from "./HocComp";



class HoverCount extends Component {
    render() {
        // console.log(this.props);
        const { count, incrementCount, decrementCount, resetCount } = this.props;

        return (
            <div>
                <button onMouseOver={incrementCount}>Increment</button>
                <button onMouseOver={decrementCount}>Decrement</button>
                <button onMouseOver={resetCount}>Reset</button>
                <h2>Count:{count}</h2>
            </div>
        )
    }
}
export default HocComp(HoverCount);