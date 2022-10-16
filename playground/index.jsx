import React from "react";
import ReactDOM from "react-dom";
import { Demo } from "../src/index.jsx";

const App = () => {
  return (
    <div>
      <h1>Playground App</h1>
      <Demo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
