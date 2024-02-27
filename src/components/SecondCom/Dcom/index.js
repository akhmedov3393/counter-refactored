import React, { Component } from "react";

class Dcomponent extends Component {
  render() {
    const {state, increment, decrement} = this.props
    return (
      <>
        <p>D component</p>
        <button onClick={()=> decrement("dCount")}>-</button>
        <button onClick={()=> increment("dCount")}>+</button>
        <div>{state.dCount}</div>
      </>
    );
  }
}
export default Dcomponent
