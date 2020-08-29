export const alertMessageReducer = (state = "", action) => {
  switch (action.type) {
    case "TOGGLE_ALERT_MESSAGE":
      return action.value;
    default:
      return state;
  }
};
