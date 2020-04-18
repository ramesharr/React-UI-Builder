const initState = {
  wireframes: [
    { name: "Div Block", id: "div" },
    { name: "Header Block", id: "header" },
    { name: "Footer Block", id: "footer" },
  ],
  formfields: [
    { name: "Input Field", id: "input" },
    { name: "Text Field", id: "textfield" },
    { name: "Button", id: "button" },
  ],
};

export const Components = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
