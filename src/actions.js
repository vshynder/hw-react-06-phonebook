import shortid from "shortid";

export const loadFromLS = (key) => {
  const ls = localStorage.getItem(key);
  console.log(ls);
  const contacts = JSON.parse(ls);
  console.log(contacts);
  return {
    type: "ADD_FORM_LS",
    data: contacts ? contacts : null,
  };
};

export const addContact = ({ name, number }) => ({
  type: "ADD_CONTACT",
  data: { name, number, id: shortid.generate() },
});

export const removeContact = (id) => ({
  type: "REMOVE_CONTACT",
  data: { id },
});

export const filter = (value) => ({
  type: "FILTER",
  value,
});

export const toggleMounted = (value) => ({ type: "TOGGLE_MOUNTED", value });
export const toggleAlertVisibility = (value) => ({
  type: "TOGGLE_ALERT_VISIBILITY",
  value,
});

export const toggleAlertMessage = (value) => ({
  type: "TOGGLE_ALERT_MESSAGE",
  value,
});
