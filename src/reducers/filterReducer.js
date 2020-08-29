export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "FILTER":
      return action.value;
    default:
      return state;
  }
};
