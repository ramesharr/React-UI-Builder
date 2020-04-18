import React from "react";

import { Bank } from "./bank";
import { Settings } from "./settings";
import { Workspace } from "./workspace";

function Appcontainer() {
  return (
    <div className="app-container">
      <Bank />
      <Workspace />
      <Settings />
    </div>
  );
}

export { Appcontainer };
