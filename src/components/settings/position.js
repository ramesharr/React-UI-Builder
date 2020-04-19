import React, { useState } from "react";

function PositionSetter(props) {
  const [val, setVal] = useState("static");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = () => {
    props.getCurrentPos(val);
  };
  return (
    <div className="position">
      <div className="position__select">
        <label>Select Components Initial Positioning</label>
        <select className="form-item" onChange={handleChange}>
          <option value="static">Static</option>
          <option value="absolute">Absolute</option>
        </select>
      </div>
      <div className="position__btn">
        <button type="submit" className="button warning" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export { PositionSetter };
