const initState = {
  data: null,
};

export const Board = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_TEMPLATE":
      return action.data;
    default:
      return state;
  }
};
