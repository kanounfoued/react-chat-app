import { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Sider from "../Sider";
import Navbar from "../Navbar";
import useStyles from "./style";

const MainFrame = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(true);
  const classes = useStyles({ open });

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container>
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sider open={open} handleDrawerClose={handleDrawerClose} />
      <Grid className={classes.mainFrame}>{children}</Grid>
    </Grid>
  );
};

MainFrame.propTypes = {
  children: PropTypes.object.isRequired,
};

MainFrame.defaultProps = {};

export default MainFrame;
