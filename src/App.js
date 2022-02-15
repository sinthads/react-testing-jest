import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(newButtonColor)}
    >
      Change to {newButtonColor}
    </button>
  );
}

export default App;