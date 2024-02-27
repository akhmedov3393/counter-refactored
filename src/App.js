import React, { Component } from "react";
import FirstCom from "./components/FirstCom";
import SecondCom from "./components/SecondCom";


class App extends Component {
  state = {
    aCount: 0,
    bCount: 0,
    cCount: 0,
    dCount: 0,
  };

  increment = (name) => {
    let prevCount = this.state[name];
    prevCount++;
    this.setState({ [name]: prevCount });
  };

  decrement = (name) => {
    let prevCount = this.state[name];
    prevCount--;
    this.setState({ [name]: prevCount });
  };

  render() {
    return (
      <div className="all">
        <p>Component</p>
       <div className="btn">
       <button
          onClick={() => {
            this.decrement("aCount");
            this.decrement("bCount");
            this.decrement("cCount");
            this.decrement("dCount");
          }}
        >
          -
        </button>
        <button onClick={() => {
          this.increment("aCount");
          this.increment("bCount");
          this.increment("cCount");
          this.increment("dCount");
        }}>+</button>
       </div>

      <div className="components">
      <FirstCom
          state={this.state}
          increment={this.increment}
          decrement={this.decrement}
        />
        <SecondCom
          state={this.state}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
      </div>
    );
  }
}

export default App;
