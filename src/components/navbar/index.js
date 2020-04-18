import React from "react";

import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar__logo" />
      <p className="navbar__title">React UI Builder</p>
      <div className="navbar__btns">
        <button className="button secondary">Clear</button>
        <button className="button primary">Save</button>
        <button className="button success">Publish</button>
      </div>
    </div>
  );
}

export { Navbar };
