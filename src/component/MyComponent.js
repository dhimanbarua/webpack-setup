import React from "react";
import "./MyComponent.scss";

class Hello extends React.Component {
  render() {
    console.log("werewr");
    return (
      <ul className="x">
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
}

export default Hello;
