import React from "react";

function App() {
  function time() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
  }
  return (
    <div className="container">
      <h1>TIME</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
