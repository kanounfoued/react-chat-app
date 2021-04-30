import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import useStyles from "./style";

const Message = (props) => {
  const { message } = props;
  const userId = "qdk,";
  const type = userId === message.id;
  const classes = useStyles({ type });

  return (
    <Grid
      className={classes.root}
      container
      justify={type ? "flex-end" : "flex-start"}
      alignItems="center"
    >
      <Avatar src="" alt="" className={classes.Avatar} />
      <Chip label="text" />
    </Grid>
  );
};

Message.propTypes = {
  message: PropTypes.instanceOf(Object).isRequired,
};

Message.defaultProps = {};

export default Message;
