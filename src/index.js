alert("hey");
import React, { Component } from "react";
import ReactDOM from "react-dom";

const styles = {
  container: {
    display: "flex",
    padding: "auto",
    margin: "auto"
  },
  innerDiv: {
    width: 200,
    height: 200,
    backgroundColor: "red"
  }
};

export default class Hello extends Component {
  render() {
    return <div>Hello from react</div>;
  }
}

ReactDOM.render(<Hello />, document.getElementById("app"));
