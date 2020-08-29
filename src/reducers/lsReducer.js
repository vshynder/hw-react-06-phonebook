export const lsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FORM_LS":
      return action.data;
    default:
      return state;
  }
};
