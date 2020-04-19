import React, { useState } from "react";

import Bank from "./bank";
import { Settings } from "./settings";
import Workspace from "./workspace";

function Appcontainer() {
  const [currentElt, setCurrentElt] = useState(null);
  const [currentPos, setCurrentPos] = useState("static");

  // Getting clicked elt details
  const getCurrentElt = (val) => {
    setCurrentElt(val);
  };

  // Getting current position set by user
  const getCurrentPos = (val) => {
    setCurrentPos(val);
  };

  return (
    <div className="app-container">
      <Bank currentPos={currentPos} />
      <Workspace
        currentPos={currentPos}
        currentElt={currentElt}
        getCurrentElt={getCurrentElt}
      />
      <Settings
        currentElt={currentElt}
        getCurrentElt={getCurrentElt}
        getCurrentPos={getCurrentPos}
      />
      <div className="txt">Drag and Drop Components Here.</div>
    </div>
  );
}

export { Appcontainer };
