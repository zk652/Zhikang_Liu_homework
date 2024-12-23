import { Component, ReactNode } from "react";
import withCounter from "./withCounter";
class HoverCounter extends Component {
  render(): ReactNode {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>hovered {count} times</h2>;
  }
}

export default withCounter(HoverCounter, 10);
