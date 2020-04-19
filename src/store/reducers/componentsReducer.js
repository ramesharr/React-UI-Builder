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
  textElements: [
    { name: "Heading", id: "heading" },
    { name: "Paragraph", id: "paragraph" },
  ],
};

export const Components = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
