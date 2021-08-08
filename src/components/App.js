import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import Filter from "../components/filter/Filter";

const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <h2>contacts</h2>
      <ContactList />
    </>
  );
};

export default App;
