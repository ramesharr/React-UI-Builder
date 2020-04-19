import React from "react";
import { connect } from "react-redux";

import { saveTemplate, clearTemplate } from "../../store/actions/boardActions";
import logo from "../../assets/logo.svg";

function Navbar(props) {
  // Clearing the board
  const handleClear = () => {
    document.getElementById("board").innerHTML = null;
    document.querySelector(".txt").style.display = "block";
    props.onClear();
  };

  // Saving the template
  const handleSave = () => {
    let data = document.getElementById("board").innerHTML;
    props.onSave(data);
    console.log(data);
  };

  // Export as HTML
  const hanldePublish = () => {
    generateHtml();
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
        <button className="button success" onClick={hanldePublish}>
          Publish
        </button>
      </div>
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

// Getting CSS and Div contents and export as HTML file
const generateHtml = () => {
  let cssText = document.getElementsByTagName("style")[0].firstChild.data;
  let windowContent =
    "<!DOCTYPE html><html><head><title>Build from React UI Builder</title></head><style lang='scss'>";
  windowContent +=
    cssText +
    "</style><body>" +
    document.getElementById("board").innerHTML +
    "</body></html>";
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/html;charset=utf-8," + encodeURIComponent(windowContent)
  );
  element.setAttribute("download", "Build file");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
