import React, { useState, Fragment, useContext } from "react";
import ThemeContext from "../ThemeContext";

function Dummy() {
  const theme = useContext(ThemeContext);
  return (
    <Fragment>
      <div className="pt-2">Current theme - {theme?.theme}</div>
      <div className="pt-2">Current size - {theme?.size}</div>
      <div>
        <h1 className={`${theme?.theme == "dark" ? "bg-black text-white" : "bg-white"}`}>
          This is a text with them applied!
        </h1>
      </div>
    </Fragment>
  );
}

export default Dummy;
