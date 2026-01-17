import { Component } from "react";

function HocComp(MiddleComp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            };
        }

        incrementCount = () => {
            this.setState({ count: this.state.count + 1 });
        };

        decrementCount = () => {
            this.setState({ count: this.state.count - 1 });
        };

        resetCount = () => {
            this.setState({ count: 0 });
        };

        render() {
            return (
                <div>
                    <MiddleComp
                        incrementCount={this.incrementCount}
                        decrementCount={this.decrementCount}
                        resetCount={this.resetCount}
                        count={this.state.count}
                        {...this.props}
                    />
                </div>
            );
        }
    };
}

export default HocComp;
