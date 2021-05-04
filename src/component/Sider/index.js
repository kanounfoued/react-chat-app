import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MessengerContact from "../MessengerContact";

import useStyles from "./style";

const Sider = (props) => {
  const { open, handleDrawerClose } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      data-testid="sider-bar"
      variant="permanent"
      className={[
        classes.drawer,
        ...(open ? [classes.drawerOpen] : [classes.drawerClose]),
      ].join(" ")}
      classes={{
        paper: [...(open ? [classes.drawerOpen] : [classes.drawerClose])].join(
          " "
        ),
      }}
    >
      <div data-testid="toolbar" className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <MessengerContact />
    </Drawer>
  );
};

Sider.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

Sider.defaultProps = {};

export default Sider;
