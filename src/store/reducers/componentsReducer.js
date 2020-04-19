const initState = {
  wireframes: [
    { name: "Div Block", id: "div" },
    { name: "Header Block", id: "headerDiv" },
    { name: "Footer Block", id: "footerDiv" },
  ],
  formfields: [
    { name: "Input Field", id: "input" },
    { name: "Text Field", id: "textfield" },
    { name: "Button", id: "buttonElt" },
  ],
};

export const Components = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
