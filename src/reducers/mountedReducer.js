import { toggleMounted } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const mountedReducer = createReducer(false, {
  [toggleMounted.type]: (state, action) => action.payload.value,
});
