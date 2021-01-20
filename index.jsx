// index.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  let count = 10;
  const [state, setState] = useState(0);

  return (
    <>
      <h1>
        Your React Playground is ready! {count} {state}
      </h1>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
