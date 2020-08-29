import { toggleAlertMessage } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const alertMessageReducer = createReducer("", {
  [toggleAlertMessage.type]: (state, action) => action.payload.value,
});
