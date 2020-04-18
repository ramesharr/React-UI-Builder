import React from "react";

import { PositionSetter } from "./position";
import "./settings.scss";

function Settings() {
  return (
    <div className="col flex-1 settings">
      <p className="settings__title">Settings</p>
      <br />
      <PositionSetter />
    </div>
  );
}

export { Settings };
