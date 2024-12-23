import { Component, ReactNode } from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default class HOC extends Component {
  render(): ReactNode {
    return (
      <div>
        <ClickCounter name="Washas" />
        <HoverCounter />
      </div>
    );
  }
}
