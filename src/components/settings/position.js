import React, { useState } from "react";

function PositionSetter() {
  const [val, setVal] = useState(null);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSubmit = () => {
    console.log(val);
  };
  return (
    <div>
      <div>
        <label>Select Components Positioning</label>
        <select onChange={handleChange}>
          <option value="absolute">Absolute</option>
          <option value="static">Static</option>
        </select>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export { PositionSetter };
