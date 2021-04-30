import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    padding: ".15rem .5rem",
  },
  Avatar: (props) => ({
    ...(props.type ? { marginLeft: ".5rem" } : { marginRight: ".5rem" }),
  }),
}));

export default useStyles;
