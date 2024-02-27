import React, { Component } from "react";
import Ccom from "./Ccom";
import Dcomponent from "./Dcom"

class SecondCom extends Component {
  render() {
    const {state, increment, decrement} = this.props
    return (
      <>
      <Ccom state={state} increment={increment} decrement={decrement}/>
      <Dcomponent state={state} increment={increment} decrement={decrement}/>
      </>
    );
  }
}
export default SecondCom;
