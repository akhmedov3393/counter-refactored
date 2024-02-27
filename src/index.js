import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

class Counter extends React.Component {


  render() {
    return (
      <>
    <App/>
      </>
    );
  }
}

root.render(
  <>
    <Counter />
  </>
);
