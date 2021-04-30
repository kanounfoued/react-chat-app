import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 300;
const smallDevice = 73;

const useStyles = makeStyles(() => ({
  mainFrame: {
    width: (props) =>
      props.open
        ? `calc(100vw - ${drawerWidth}px)`
        : `calc(100vw - ${smallDevice}px)`,
    marginTop: 64,
    "@media(max-width: 800px)": {
      marginTop: 56,
      width: (props) =>
        props.open
          ? `calc(100vw - ${smallDevice}px)`
          : `calc(100vw - ${smallDevice}px)`,
    },
  },
}));

export default useStyles;
