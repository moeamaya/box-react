import React, { useState } from "react";
import "./App.css";

function App() {
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(600);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>Width</label>
          <input
            type="number"
            value={width}
            onChange={e => setWidth(e.target.value)}
          ></input>
          <label>Height</label>
          <input
            type="number"
            value={height}
            onChange={e => setHeight(e.target.value)}
          ></input>
        </div>
      </header>

      <main className="App-main">
        <div
          className="box"
          style={{ width: `${width}px`, height: `${height}px` }}
        ></div>
      </main>
    </div>
  );
}

export default App;
