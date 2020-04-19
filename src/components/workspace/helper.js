import { v4 as uuid } from "uuid";

// creating elements based on the input ID
const createElement = (id) => {
  switch (id) {
    case "div":
      return divCreator(id);
    case "header":
      return blockCreator(id);
    case "footer":
      return blockCreator(id);
    case "input":
      return inputCreator(id);
    case "textfield":
      return textFieldCreator(id);
    case "button":
      return buttonCreator(id);
    default:
      return null;
  }
};

const createRandomId = () => {
  return uuid().toString().substr(0, 6);
};

const divCreator = (id) => {
  let div = document.createElement(id);
  div.id = `${createRandomId()}`;
  div.classList.add("boardElt");
  div.style.border = "1px solid black";
  div.style.width = "200px";
  div.style.height = "100px";
  div.style.cursor = "pointer";
  div.setAttribute("contenteditable", "true");
  return div;
};

const blockCreator = (id) => {
  let div = document.createElement("div");
  div.id = `${createRandomId()}`;
  div.classList.add("boardElt");
  div.style.width = "auto";
  div.style.background = "#333";
  div.style.color = "#fff";
  div.style.textAlign = "center";
  div.style.padding = "20px";
  div.style.cursor = "pointer";
  div.setAttribute("contenteditable", "true");
  div.innerHTML = `This is ${id} block`;
  return div;
};

const inputCreator = (id) => {
  let input = document.createElement(id);
  input.id = `${createRandomId()}`;
  input.classList.add("boardElt", "form-item");
  input.style.cursor = "pointer";
  return input;
};

const textFieldCreator = (id) => {
  let textfield = document.createElement("textarea");
  textfield.id = `${createRandomId()}`;
  textfield.classList.add("boardElt", "form-item");
  textfield.style.cursor = "pointer";
  return textfield;
};

const buttonCreator = (id) => {
  let button = document.createElement("button");
  button.id = `${createRandomId()}`;
  button.classList.add("boardElt", "button");
  button.innerHTML = "Click Here";
  button.style.cursor = "pointer";
  return button;
};

export { createElement };
