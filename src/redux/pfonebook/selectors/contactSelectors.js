import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = (state) => state.contacts.items;
export const filterSelector = (state) => state.contacts.filter;
export const loadingSelector = (state) => state.loading;
export const errorSelector = (state) => state.error;

export const getFilteredContact = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    const normalizedFilter = filter.toUpperCase();
    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(normalizedFilter)
    );
  }
);
