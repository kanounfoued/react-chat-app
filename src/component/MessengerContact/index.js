import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import MessengerContactItem from "../MessengerContactItem";
import { fetchContactList } from "../../store/action/messenger/contact";

const MessengerContact = (props) => {
  const { dispatch, contacts } = props;
  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  return (
    <List>
      {contacts.map((contact) => (
        <MessengerContactItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};

MessengerContact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contacts: PropTypes.instanceOf(Array).isRequired,
};
MessengerContact.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    contacts: state.messengerContact.contacts,
  };
};

export default connect(mapStateToProps)(MessengerContact);
