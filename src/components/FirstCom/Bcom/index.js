import React, { Component } from "react";

class Bcom extends Component {
    render() {
        const {state, increment,decrement} = this.props
        return(
            <>
            <p>B component</p>
            <button onClick={() => decrement("bCount")}>-</button>
            <button onClick={() => increment("bCount")}>+</button>
            <div>{state.bCount}</div>
            </>
        )
    }
} export default Bcom