import React, { Component } from "react";

class Ccom extends Component {
    render() {
        const { state, increment, decrement } = this.props;

        return(
            <>
            <p>C component</p>
            <button onClick={() => decrement("cCount")}>-</button>
            <button onClick={() => increment("cCount")}>+</button>
            <div>{state.cCount}</div>
            </>
        )
    }
} export default Ccom