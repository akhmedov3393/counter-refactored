import React, { Component } from "react";

import Acom from "./Acom";
import Bcom from "./Bcom";

class FirstCom extends Component {
  render() {
    const { state, increment, decrement } = this.props;

    return (
      <div>
        <Acom state={state} increment={increment} decrement={decrement} />
        <Bcom state={state} increment={increment} decrement={decrement} />
      </div>
    );
  }
}
export default FirstCom;
