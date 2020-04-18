export const saveTemplate = (data) => {
  return {
    type: "SAVE_TEMPLATE",
    data,
  };
};

export const clearTemplate = () => {
  return {
    type: "CLEAR_TEMPLATE",
  };
};
