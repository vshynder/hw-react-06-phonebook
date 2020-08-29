import { toggleAlertVisibility } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const alertShownReducer = createReducer(false, {
  [toggleAlertVisibility.type]: (state, action) => action.payload.value,
});
