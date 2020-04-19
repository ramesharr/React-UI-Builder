import React from "react";

function Editor(props) {
  let elt = document.getElementById(props.currentElt);
  let name = elt.nodeName;
  let renderDiv =
    name === "DIV" || name === "TEXTAREA" ? (
      divHook(elt, props, name)
    ) : name === "INPUT" ? (
      inputHook(elt, props)
    ) : name === "BUTTON" ? (
      buttonHook(elt, props)
    ) : (
      <div>loading...</div>
    );
  // Entirely remove the element from parent
  const handleDelete = () => {
    elt.remove();
    props.getCurrentElt(null);
  };
  return (
    <div className="editor">
      <p>Properties</p>
      {renderDiv}
      <div className="delete">
        <button className="button alert" type="submit" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export { Editor };

// For Div and Textarea Element
const divHook = (elt, props, name) => {
  let data = {
    width: "200",
    height: "100",
    bg: "transparent",
    placeholder: "",
  };
  const handleChange = (e) => {
    data = { ...data, [e.target.id]: e.target.value };
  };
  const handleSubmit = () => {
    elt.style.width = `${data.width}px`;
    elt.style.height = `${data.height}px`;
    if (name === "TEXTAREA") {
      elt.setAttribute("placeholder", `${data.placeholder}`);
    } else {
      elt.style.backgroundColor = data.bg;
    }
  };
  const handleCancel = () => {
    props.getCurrentElt(null);
    if (name === "TEXTAREA") {
      elt.style.border = "1px solid #ccc";
    }
    elt.style.border = "1px solid black";
  };
  let divBlock = (
    <div>
      <p>Width:</p>
      <input
        id="width"
        type="number"
        placeholder="Enter value in px"
        className="form-item"
        defaultValue={data.width}
        onChange={handleChange}
      ></input>
      <p>Height:</p>
      <input
        id="height"
        type="number"
        placeholder="Enter value in px"
        className="form-item"
        defaultValue={data.height}
        onChange={handleChange}
      ></input>
      {name === "TEXTAREA" ? (
        <>
          <p>Placeholder:</p>
          <input
            id="placeholder"
            className="form-item"
            placeholder="Enter Plcaeholder"
            defaultValue={data.placeholder}
            onChange={handleChange}
          ></input>
        </>
      ) : (
        <>
          <p>Background:</p>
          <input
            id="bg"
            className="form-item"
            placeholder="Enter color name"
            defaultValue={data.bg}
            onChange={handleChange}
          ></input>
        </>
      )}
      <div className="btnGroup">
        <button type="submit" className="button warning" onClick={handleSubmit}>
          Submit
        </button>
        <button
          type="submit"
          className="button secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
  return divBlock;
};

// For Input Element
const inputHook = (elt, props) => {
  let data = { type: "text", placeholder: "" };
  const handleChange = (e) => {
    data = { ...data, [e.target.id]: e.target.value };
  };
  const handleSubmit = () => {
    elt.setAttribute("type", `${data.type}`);
    elt.setAttribute("placeholder", `${data.placeholder}`);
    if (data.type === "button") {
      elt.innerHTML = "Click Here";
      elt.classList.remove("form-item");
      elt.classList.add("button");
    }
  };
  const handleCancel = () => {
    props.getCurrentElt(null);
    elt.style.border = "1px solid #ccc";
  };
  let inputBlock = (
    <div>
      <p>Type:</p>
      <select id="type" className="form-item" onChange={handleChange}>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="button">Button</option>
      </select>
      <p>Placeholder:</p>
      <input
        id="placeholder"
        type="text"
        placeholder="Enter value"
        className="form-item"
        defaultValue={data.placeholder}
        onChange={handleChange}
      ></input>
      <div className="btnGroup">
        <button type="submit" className="button warning" onClick={handleSubmit}>
          Submit
        </button>
        <button
          type="submit"
          className="button secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
  return inputBlock;
};

// For button Element
const buttonHook = (elt, props) => {
  let data = { text: "Click Here", type: "primary" };
  const handleChange = (e) => {
    data = { ...data, [e.target.id]: e.target.value };
  };
  const handleSubmit = () => {
    elt.innerHTML = data.text;
    elt.className = "";
    data.type === ""
      ? elt.classList.add("boardElt", "button")
      : elt.classList.add("boardElt", "button", data.type);
  };
  const handleCancel = () => {
    props.getCurrentElt(null);
    elt.style.border = "1px solid transparent";
  };
  let buttonBlock = (
    <div>
      <p>Type:</p>
      <select id="type" className="form-item" onChange={handleChange}>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
        <option value="alery">Alert</option>
      </select>
      <p>Text:</p>
      <input
        id="text"
        type="text"
        placeholder="Enter value"
        className="form-item"
        defaultValue={data.text}
        onChange={handleChange}
      ></input>
      <div className="btnGroup">
        <button type="submit" className="button warning" onClick={handleSubmit}>
          Submit
        </button>
        <button
          type="submit"
          className="button secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
  return buttonBlock;
};
