import React, { useState } from "react";

function App() {
  
  setInterval(Timer, 1000);

  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  function Timer() {
    const newTime = new Date().toLocaleTimeString();
    setCurrentTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={Timer}>Get Time</button>
    </div>
  );
}

export default App;
