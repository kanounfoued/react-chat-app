import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 300;
const smallDevice = 73;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "@media(max-width: 800px)": {
      width: `calc(100% - ${smallDevice}px)`,
    },
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
}));

export default useStyles;
