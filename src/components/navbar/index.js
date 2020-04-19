import React from "react";
import { connect } from "react-redux";

import { saveTemplate, clearTemplate } from "../../store/actions/boardActions";
import logo from "../../assets/logo.svg";

function Navbar(props) {
  // clearing the board
  const handleClear = () => {
    document.getElementById("board").innerHTML = null;
    document.querySelector(".txt").style.display = "block";
    props.onClear();
  };
  // Savingthe template
  const handleSave = () => {
    let data = document.getElementById("board").innerHTML;
    props.onSave(data);
    console.log(data);
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
      {}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (data) => {
      dispatch(saveTemplate(data));
    },
    onClear: () => {
      dispatch(clearTemplate());
    },
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
