export const alertShownReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_ALERT_VISIBILITY":
      return !state;
    default:
      return state;
  }
};
