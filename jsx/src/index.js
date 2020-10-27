// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
//import (do not scan automatically for modules, but using Babel it becomes the same of require.) x require(scan for modules automatically)

function getButtonText() {
    return 'Click on me!';
}
/* Create a react component
## A component is a Function or Class that produces HTML to show the user (using JSX) and handles feedback from the user (using Event Handlers) */
const App = () => {
    const buttonText = { text: 'Click Me!' };
    const style = { backgroundColor: 'blue', color: 'white'}
    const labelText = { label: 'Enter name:'}
    //this is the same of const App function() {}
  return ( 
  <div>
      <label className="label" htmlFor="name">{labelText.label}</label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
  </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
