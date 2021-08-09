import { createReducer } from "@reduxjs/toolkit";
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
  filterContact,
  alertContacts,
  resetAlert,
} from "../actions/contactActions";

const contacts = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => [...payload],
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});

const error = createReducer("", {
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [getContactsError]: (_, { payload }) => payload,
});

const alertContact = createReducer("", {
  [alertContacts]: (_, { payload }) => payload,
  [resetAlert]: () => "",
});

export { contacts, filter, loading, error, alertContact };
