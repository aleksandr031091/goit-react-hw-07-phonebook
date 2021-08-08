import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteContacts } from "../../redux/contact/contactActions";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <span>{name}</span> : <span>{number}</span>
          <button className={css.button} onClick={() => deleteContacts(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mstp = (state) => {
  return {
    contacts: state.contacts.filter(({ name, number }) =>
      Object.values({ name, number }).some((contact) =>
        contact.toUpperCase().includes(state.filter.toUpperCase())
      )
    ),
  };
};

export default connect(mstp, { deleteContacts })(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContacts: PropTypes.func.isRequired,
};
