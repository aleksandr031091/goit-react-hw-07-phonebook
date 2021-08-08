import { createAction } from "@reduxjs/toolkit";

const getContactsRequest = createAction("@contact/getRequest");
const getContactsSuccess = createAction("@contact/getSuccess");
const getContactsError = createAction("@contact/getError");

const addContactRequest = createAction("@contact/addRequest");
const addContactSuccess = createAction("@contact/addSuccess");
const addContactError = createAction("@contact/addError");

const deleteContactRequest = createAction("@contact/deleteRequest");
const deleteContactSuccess = createAction("@contact/deleteSuccess");
const deleteContactError = createAction("@contact/deleteError");

const filterContact = createAction("@contact/filter", ({ target }) => ({
  payload: target.value,
}));

export {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContact,
};
