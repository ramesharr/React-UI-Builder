import React from "react";

function Toaster(props) {
  const handleClick = () => {
    let elt = document.getElementById("toast");
    elt.style.display = "none";
  };
  return (
    <div id="toast" className={`notification ${props.status}`}>
      <div>
        <p className="notification__message">{props.msg}</p>
      </div>
      <div>
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
}

export { Toaster };
