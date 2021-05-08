import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MessengerContactItem from "../MessengerContactItem";
import { fetchContactList } from "../../store/action/messenger/contact";
import useStyles from "./style";

const MessengerContact = (props) => {
  const { dispatch, contacts, isSiderOpen } = props;
  const classes = useStyles({ isSiderOpen });

  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  if (contacts.length === 0) {
    return (
      <Grid
        className={classes.noContact}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <AccountCircleIcon
          data-testid="no-contact-icon"
          className={classes.noContactIcon}
        />
        <Typography className={classes.noContactMessage} variant="h4">
          No Contacts
        </Typography>
      </Grid>
    );
  }

  return (
    <List data-testid="list-of-contacts">
      {contacts.map((contact) => (
        <MessengerContactItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};

MessengerContact.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contacts: PropTypes.instanceOf(Array).isRequired,
  isSiderOpen: PropTypes.bool.isRequired,
};
MessengerContact.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    contacts: state.messengerContact.contacts,
  };
};

export default connect(mapStateToProps)(MessengerContact);
