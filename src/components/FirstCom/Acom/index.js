import React, { Component } from "react";

class Acom extends Component {
  render() {
    const { state, increment, decrement } = this.props;

    return (
      < >
        <div className="Acomp">
      
       <div className="acom">
       <p className="acomtext">A component</p>
       <button onClick={() => decrement("aCount")}>-</button>
        <button onClick={() => increment("aCount")}>+</button>
       </div>
        <div className="acount">{state.aCount}</div>
        </div>
      </>
    );
  }
}
export default Acom;
