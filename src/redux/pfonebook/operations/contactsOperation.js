import axios from "axios";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "../actions/contactActions";

axios.defaults.baseURL = "http://localhost:4040";

export const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch((error) => dispatch(getContactsError(error)));
};

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());
  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};
