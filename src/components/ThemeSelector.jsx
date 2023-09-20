import ThemeContext from "../ThemeContext";
import React, { useState, Fragment } from "react";

function ThemeSelector({ children }) {
  const availableThemes = ["dark", "regular", "retro"];
  const availableSizes = ["small", "medium", "large"];

  const [size, setSize] = useState("small");
  const [theme, setTheme] = useState("dark");
  return (
    <Fragment>
      <div className="flex p-3">
        <div>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            {availableThemes.map((theme, index) => (
              <option key={index} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select value={theme} onChange={(e) => setSize(e.target.value)}>
            {availableSizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      <ThemeContext.Provider value={{ size: size, theme: theme }}>
        {children}
      </ThemeContext.Provider>
    </Fragment>
  );
}

export default ThemeSelector;
