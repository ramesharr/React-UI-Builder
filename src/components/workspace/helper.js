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
  return div;
};

const blockCreator = (id) => {
  let div = document.createElement("div");
  div.id = `${createRandomId()}`;
  div.innerHTML = `This is ${id} block`;
  return div;
};

const inputCreator = (id) => {
  let input = document.createElement(id);
  input.id = `${createRandomId()}`;
  input.classList.add("form-item");
  return input;
};

const textFieldCreator = (id) => {
  let textfield = document.createElement("textarea");
  textfield.id = `${createRandomId()}`;
  textfield.classList.add("form-item");
  return textfield;
};

const buttonCreator = (id) => {
  let button = document.createElement("button");
  button.id = `${createRandomId()}`;
  button.classList.add("button");
  button.innerHTML = "Click Here";
  return button;
};

export { createElement };
