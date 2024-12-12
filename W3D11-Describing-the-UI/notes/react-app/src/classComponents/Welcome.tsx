import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Class Component</h1>;
  }
}

export default Welcome;

/*
Functional vs Class

Functional:
1. Simple functions
2. Use Func components as much as possible
3. Absence of "this" keyword
4. Solution without using state
5. Mainly responsible for the UI
6. Stateless / Dumb / Presentational

Class:
1. More feature rich
2. Maintain their own private data - state
3. Complex UI logic
4. Provide lifecycle hooks
5. Stateful / Smart / Container

*/
