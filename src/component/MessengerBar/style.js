import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    height: 80,
    width: "100%",
    borderBottom: "1px solid #eee",
  },
  myContactAvatar: {
    marginRight: ".1rem",
    marginLeft: ".1rem",
    height: 45,
    width: 45,
  },
  myAvatar: {
    marginLeft: ".1rem",
    marginRight: ".1rem",
    height: 45,
    width: 45,
  },
  usersName: {
    fontSize: 22,
    textTransform: "capitalize",
    fontWeight: "bold",
    maxWidth: 120,
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
}));

export default useStyles;
