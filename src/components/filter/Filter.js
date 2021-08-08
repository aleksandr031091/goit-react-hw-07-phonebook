import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/contact/contactActions";
import css from "./Filter.module.css";

const Filter = ({ value, setNewFilterContacts }) => {
  const onHandleChange = (e) => {
    setNewFilterContacts(e.target.value);
  };

  return (
    <>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onHandleChange}
        />
      </label>
    </>
  );
};

const mstp = (state) => {
  return {
    value: state.filter,
  };
};

export default connect(mstp, { setNewFilterContacts: filterContacts })(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  setNewFilterContacts: PropTypes.func.isRequired,
};
