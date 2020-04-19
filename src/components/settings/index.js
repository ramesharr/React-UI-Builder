import React from "react";

import { PositionSetter } from "./position";
import "./settings.scss";
import { Editor } from "./editor";

function Settings(props) {
  return (
    <div className="col flex-1 settings">
      <p className="settings__title">Settings</p>
      <PositionSetter getCurrentPos={props.getCurrentPos} />
      {props.currentElt === null ? null : (
        <Editor
          currentElt={props.currentElt}
          getCurrentElt={props.getCurrentElt}
        />
      )}
    </div>
  );
}

export { Settings };
