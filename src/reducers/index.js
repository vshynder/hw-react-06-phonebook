import { combineReducers } from "redux";

import { contactReducer } from "./contactReducer";
import { filterReducer } from "./filterReducer";
import { mountedReducer } from "./mountedReducer";
import { alertShownReducer } from "./alertShownReducer";
import { alertMessageReducer } from "./alertMessageReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  isMounted: mountedReducer,
  isAlertShown: alertShownReducer,
  alertMessage: alertMessageReducer,
});

export default rootReducer;
