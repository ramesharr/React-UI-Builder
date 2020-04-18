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

  // For drag start
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };
  // To stop propagation
  const dragOver1 = (e) => {
    e.stopPropagation();
  };

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

  return (
    <div className="col flex-2 ws">
      <div
        id="board"
        className="board"
        onDrop={drop}
        onDragOver={dragOver}
      ></div>
      <div className="txt">Drag and Drop Components Here.</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.Board;
};

export default connect(mapStateToProps)(Workspace);
