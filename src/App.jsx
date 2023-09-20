import React from "react";
import Dummy from "./components/Dummy";
import ThemeSelector from "./components/ThemeSelector";

function App() {
  return (
    <div>
      <ThemeSelector>
        <Dummy />
      </ThemeSelector>
    </div>
  );
}

export default App;
