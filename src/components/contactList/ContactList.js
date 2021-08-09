import React, { Component } from "react";

import { connect } from "react-redux";
// import PropTypes from "prop-types";
import {
  deleteContact,
  getContacts,
} from "../../redux/pfonebook/operations/contactsOperation";
import {
  getFilteredContact,
  getContactById,
} from "../../redux/pfonebook/selectors/contactSelectors";
import css from "./ContactList.module.css";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <span>{name}</span> : <span>{number}</span>
            <button
              className={css.button}
              onClick={() => this.props.deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

const mstp = (state) => {
  return {
    contacts: getFilteredContact(state),
  };
};

export default connect(mstp, { deleteContact, getContacts })(ContactList);

// export default connect(mstp, { getContactById })(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContacts: PropTypes.func.isRequired,
// };
