export const mountedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MOUNTED":
      return action.value;
    default:
      return state;
  }
};
