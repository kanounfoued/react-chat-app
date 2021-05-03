import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import useStyles from "./style";

const MessengerInput = (props) => {
  const { value, onChange, label } = props;
  const classes = useStyles();

  return (
    <Grid data-testid="messenger-input-container" container>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        wrap="nowrap"
        className={classes.textFieldContainer}
      >
        <TextField
          name="messenger-text-input"
          value={value}
          onChange={onChange}
          label={label}
          type="text"
          variant="outlined"
          fullWidth
          size="small"
          className={classes.textField}
        />

        <IconButton>
          <SendIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

MessengerInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

MessengerInput.defaultProps = {};

export default MessengerInput;
