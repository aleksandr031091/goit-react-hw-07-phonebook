import { combineReducers } from "redux";
import {
  contacts,
  filter,
  loading,
  error,
  alertContact,
} from "../reducer/contactsReducer";

export default combineReducers({
  items: contacts,
  filter,
  loading,
  error,
  alert: alertContact,
});
