import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./style";

const Navbar = (props) => {
  const { open, handleDrawerOpen } = props;
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={[classes.appBar, ...(open ? [classes.appBarShift] : [])].join(
        " "
      )}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={[classes.menuButton, ...(open ? [classes.hide] : [])].join(
            " "
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Navbar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

Navbar.defaultProps = {};

export default Navbar;
