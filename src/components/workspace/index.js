import React from "react";

import "./workspace.scss";

function Workspace() {
  // For Dropping
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const elt = document.getElementById(card_id).cloneNode(true);
    e.target.appendChild(elt);
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

export { Workspace };
