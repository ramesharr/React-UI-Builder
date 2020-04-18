import React from "react";

import logo from "../../assets/logo.svg";

function Navbar() {
  // clearing the board
  const handleClear = () => {
    document.getElementById("board").innerHTML = null;
    document.querySelector(".txt").style.display = "block";
  };
  // Savingthe template
  const handleSave = () => {
    console.log(document.getElementById("board").innerHTML);
  };
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />
      <p className="navbar__title">React UI Builder</p>
      <div className="navbar__btns">
        <button className="button secondary" onClick={handleClear}>
          Clear
        </button>
        <button className="button primary" onClick={handleSave}>
          Save
        </button>
        <button className="button success">Publish</button>
      </div>
    </div>
  );
}

export { Navbar };
