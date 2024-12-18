import React from "react";

export default class Nav extends React.Component {
  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }
  render(): React.ReactNode {
    return <h3>Nav bar</h3>;
  }
}
