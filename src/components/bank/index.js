import React from "react";

import "./bank.scss";

function Bank() {
  // For drag start
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };
  // To stop propagation
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="col flex-1 bank">
      <div className="bank__title">Components</div>
      <div className="bank__components">
        <p>Wire Frames</p>
        <li id="div" draggable onDragStart={dragStart} onDragOver={dragOver}>
          Div Block
        </li>
        <li id="header">Header Block</li>
        <li id="footer">Footer Block</li>
        <p>Form Fields</p>
        <li id="input">Input Field</li>
        <li id="htag">Heading</li>
        <li id="textfield">Text Field</li>
        <li id="button">Button</li>
      </div>
    </div>
  );
}

export { Bank };
