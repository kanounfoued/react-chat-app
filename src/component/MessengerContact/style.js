import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  noContact: {
    marginTop: "1rem",
  },
  noContactIcon: (props) => ({
    fontSize: props.isSiderOpen ? "6rem" : "3rem",
    "@media(max-width: 800px)": {
      fontSize: "3rem",
    },
  }),
  noContactMessage: (props) => ({
    margin: 0,
    fontSize: props.isSiderOpen ? 18 : 12,
    "@media(max-width: 800px)": {
      fontSize: 12,
    },
  }),
}));

export default useStyles;
