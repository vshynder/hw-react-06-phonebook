import { addContact, removeContact } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const LS_KEY = "react-hw-3";

const initialState = JSON.parse(localStorage.getItem(LS_KEY));

export const contactReducer = createReducer(initialState, {
  [addContact.type]: (state, action) => [
    ...state,
    {
      name: action.payload.name,
      number: action.payload.number,
      id: action.payload.id,
    },
  ],
  [removeContact.type]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload.id),
});
