import { loadFromLS } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const lsReducer = createReducer([], {
  [loadFromLS.type]: (state, action) => action.payload.data,
});
