import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  alertContacts,
  resetAlert,
} from "../../redux/pfonebook/actions/contactActions";
import { addContact } from "../../redux/pfonebook/operations/contactsOperation";
import {
  contactsSelector,
  errorSelector,
} from "../../redux/pfonebook/selectors/contactSelectors";
import css from "./ContactForm.module.css";

const initialState = { name: "", number: "" };

class ContactForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;

    if (this.props.alert) {
      this.props.resetAlert();
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.contacts.some(({ name, number }) =>
        [name, number].some(
          (item) =>
            item.toUpperCase() === this.state.name.toUpperCase() ||
            item.toUpperCase() === this.state.number.toUpperCase()
        )
      )
    ) {
      this.props.alertContacts("This contact is already in contacts");
    } else {
      this.props.addContact({
        ...this.state,
      });
      this.setState({ ...initialState });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <p className={css.alert}>{this.props.alert}</p>
        <form className={css.form} onSubmit={this.onHandleSubmit}>
          <label className={css.label}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              value={name}
              //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.onHandleChange}
            />
          </label>
          <label className={css.label}>
            Phone
            <input
              className={css.input}
              type="tel"
              name="number"
              value={number}
              //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.onHandleChange}
            />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mstp = (state) => ({
  contacts: contactsSelector(state),
  error: errorSelector(state),
  alert: state.contacts.alert,
});

export default connect(mstp, { addContact, alertContacts, resetAlert })(
  ContactForm
);

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  alertContacts: PropTypes.func.isRequired,
  resetAlert: PropTypes.func.isRequired,
};
