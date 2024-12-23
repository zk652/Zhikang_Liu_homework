import { Component, ReactNode } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render(): ReactNode {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {this.props.name} clicked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
