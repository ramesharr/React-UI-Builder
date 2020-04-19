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
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    // const elt = document.getElementById(card_id).cloneNode(true);
    e.target.appendChild(createElement(card_id));
    const txt = document.querySelector(".txt");
    txt.style.display = "none";
  };
  // To allow to continue on dropping
  const dragOver = (e) => {
    e.preventDefault();
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

  return (
    <div className="col flex-2 ws">
      <div
        id="board"
        className="board"
        onDrop={drop}
        onDragOver={dragOver}
        onClick={handleClick}
        draggable="false"
      ></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.Board;
};

export default connect(mapStateToProps)(Workspace);
