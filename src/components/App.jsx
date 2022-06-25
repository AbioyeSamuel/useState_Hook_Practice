import React, { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState("Time");

  function Timer() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
    setCurrentTime(time);
  }
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={Timer}>Get Time</button>
    </div>
  );
}

export default App;
