import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const loadFromLS = createAction("ADD_FORM_LS", (key) => {
  const ls = localStorage.getItem(key);
  const contacts = JSON.parse(ls);
  return {
    payload: {
      data: contacts ? contacts : null,
    },
  };
});

export const addContact = createAction("ADD_CONTACT", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: shortid.generate(),
    },
  };
});

export const removeContact = createAction("REMOVE_CONTACT", (id) => {
  return {
    payload: {
      id,
    },
  };
});

export const filter = createAction("FILTER", (value) => {
  return {
    payload: {
      value,
    },
  };
});

export const toggleMounted = createAction("TOGGLE_MOUNTED", (value) => {
  return {
    payload: {
      value,
    },
  };
});
export const toggleAlertVisibility = createAction(
  "TOGGLE_ALERT_VISIBILITY",
  (value) => {
    return {
      payload: {
        value,
      },
    };
  }
);

export const toggleAlertMessage = createAction(
  "TOGGLE_ALERT_MESSAGE",
  (value) => {
    return {
      payload: {
        value,
      },
    };
  }
);
