import { filter } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const filterReducer = createReducer("", {
  [filter.type]: (state, action) => action.payload.value,
});
