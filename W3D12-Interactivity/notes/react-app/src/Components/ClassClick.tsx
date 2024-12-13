import { Component, ReactNode } from "react";

export default class ClassClick extends Component {
  clickHandler(): void {
    console.log("Click the button");
  }
  render(): ReactNode {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}
