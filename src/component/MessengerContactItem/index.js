import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import useStyles from "./style";

const MessengerContactItem = (props) => {
  const { contact } = props;
  const { name, familyName, picture } = contact;
  const classes = useStyles();

  return (
    <Tooltip
      data-testid="tooltip-contact-item"
      title={`${name} ${familyName}`}
      placement="right"
    >
      <ListItem button>
        <ListItemIcon>
          <Avatar className={classes.Avatar} src={picture} alt="user-picture" />
        </ListItemIcon>

        <ListItemText
          className={classes.ListItemText}
          primary={`${name} ${familyName}`}
        />
      </ListItem>
    </Tooltip>
  );
};

MessengerContactItem.propTypes = {
  contact: PropTypes.instanceOf(Object).isRequired,
};

MessengerContactItem.defaultProps = {};
export default MessengerContactItem;
