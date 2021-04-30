import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import useStyles from "./style";

const MessengerBar = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Grid container justify="center" alignItems="center" wrap="nowrap">
        <Tooltip title="Said Baklioun" placement="bottom-end">
          <Grid container justify="flex-end" alignItems="center">
            <Avatar
              className={classes.myContactAvatar}
              src=""
              alt="my-contact"
            />
          </Grid>
        </Tooltip>

        <Tooltip title="Mohamed Foued Kanoun" placement="bottom-start">
          <Grid container alignItems="center">
            <Avatar className={classes.myAvatar} src="" alt="me" />
          </Grid>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default MessengerBar;
