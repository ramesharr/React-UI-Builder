import React, { useEffect } from "react";
import { connect } from "react-redux";

import { createElement } from "./helper";
import "./workspace.scss";

function Workspace(props) {
  useEffect(() => {
    console.log(props.data);
    if (props.data !== null) {
      const txt = document.querySelector(".txt");
      txt.style.display = "none";
      document.getElementById("board").innerHTML = props.data;
    }
  }, [props.data]);

  // For Dropping
  const drop = (e) => {
    let width = document.getElementById("board").offsetWidth - 38;
    const card_id = e.dataTransfer.getData("card_id");
    if (card_id.length === 6) {
      let elt = document.getElementById(card_id);
      elt.style.position = "absolute";
      elt.style.left = e.clientX + "px";
      elt.style.top = e.clientY + "px";
      e.target.appendChild(elt);
    } else if (props.currentPos === "absolute") {
      let dm = createElement(card_id, width);
      dm.style.position = "absolute";
      dm.style.left = e.clientX + "px";
      dm.style.top = e.clientY + "px";
      e.target.appendChild(dm);
    } else {
      e.target.appendChild(createElement(card_id, width));
    }
    e.preventDefault();
    const txt = document.querySelector(".txt");
    txt.style.display = "none";
  };
  // To allow to continue on dropping
  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Capturing the clicked element
  const handleClick = (e) => {
    let els = document.getElementsByClassName("boardElt");
    if (e.target.id === "board") {
      props.getCurrentElt(null);
    }
    for (let i = 0; i < els.length; i++) {
      let elt = document.getElementById(els[i].id);
      if (els[i].id === e.target.id) {
        elt.style.border = "2px dotted red";
        props.getCurrentElt(e.target.id);
      } else if (elt.nodeName === "DIV") {
        elt.style.border = "1px solid black";
      } else if (elt.nodeName === "BUTTON") {
        elt.style.border = "1px solid transparent";
      } else {
        elt.style.border = "1px solid #ccc";
      }
    }
  };

  // Helpers
  const handleDragStart = (e) => {
    if (e.target.id !== "board") {
      e.dataTransfer.setData("card_id", e.target.id);
    }
  };

  return (
    <div className="col flex-2 ws">
      <div
        id="board"
        className="board"
        onDrop={drop}
        onDragOver={dragOver}
        onClick={handleClick}
        onDragStart={handleDragStart}
      ></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.Board;
};

export default connect(mapStateToProps)(Workspace);
