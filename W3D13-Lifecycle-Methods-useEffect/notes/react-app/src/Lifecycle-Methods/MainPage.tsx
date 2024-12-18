import React from "react";
import Nav from "./Nav";

// constructor -> Render -> componentDidMount
export default class MainPage extends React.Component<
  {},
  { show: boolean; data: boolean; showChild: boolean; counter: number }
> {
  constructor(props: string) {
    super(props);
    this.state = {
      show: true,
      data: false,
      showChild: false,
      counter: 0,
    };
    console.log("constructor");
  }

  componentDidMount(): void {
    console.log("componentDidMount");
    this.setState({ data: true });
  }

  // componentDidUpdate(): void {
  //   console.log("componentDidUpdate");
  // }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{
      show: boolean;
      data: boolean;
      showChild: boolean;
      counter: number;
    }>,
    snapshot?: any
  ): void {
    console.log("componentDidUpdate", prevState);
  }

  render(): React.ReactNode {
    console.log("render");
    return (
      <div>
        <h1>Life Cycle Method</h1>
        {this.state.show ? <Nav /> : null}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle NavBar
        </button>
        <hr />
        <h1>Component Will Unmount</h1>
        {this.state.showChild && <Child />}
        <button
          onClick={() => {
            this.setState({ showChild: !this.state.showChild });
          }}
        >
          Toggle Child
        </button>

        <hr />
        <h1>componentDidUpdate</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update Counter {this.state.counter}
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount(): void {
    console.log("component is hidden now");
  }
  render(): React.ReactNode {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}
