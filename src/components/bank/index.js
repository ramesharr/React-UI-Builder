import React from "react";
import { connect } from "react-redux";

import "./bank.scss";

function Bank(props) {
  // For drag start
  const dragStart = (e) => {
    const target = e.target;
    if (props.currentPos === "absolute") {
      // let style = window.getComputedStyle(target, null);
      e.dataTransfer.setData("text/plain", e.clientX + "," + e.clientY);
      e.dataTransfer.setData("card_id", e.target.id);
    } else {
      e.dataTransfer.setData("card_id", target.id);
    }
  };

  // To stop propagation
  const dragOver = (e) => {
    e.stopPropagation();
  };

  const { wireframes, formfields } = props;

  return (
    <div className="col flex-1 bank">
      <div className="bank__title">Components</div>
      <div className="bank__components">
        <p>Wire Frames</p>
        {wireframes.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              draggable
              onDragStart={dragStart}
              onDragOver={dragOver}
            >
              {item.name}
            </li>
          );
        })}
        <p>Form Fields</p>
        {formfields.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              draggable
              onDragStart={dragStart}
              onDragOver={dragOver}
            >
              {item.name}
            </li>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.Components;
};

export default connect(mapStateToProps, null)(Bank);
