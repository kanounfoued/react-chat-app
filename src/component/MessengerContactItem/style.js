import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  ListItemText: {
    "& .MuiTypography-root": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textTransform: "capitalize",
    },
  },
  Avatar: {
    height: 45,
    width: 45,
  },
}));

export default useStyles;
