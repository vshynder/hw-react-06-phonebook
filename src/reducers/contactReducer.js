const LS_KEY = "react-hw-3";

const initialState = JSON.parse(localStorage.getItem(LS_KEY));

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          name: action.data.name,
          number: action.data.number,
          id: action.data.id,
        },
      ];
    case "REMOVE_CONTACT":
      return state.filter((contact) => contact.id !== action.data.id);
    default:
      return state;
  }
};
