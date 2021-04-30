import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: 350,
    height: 380,
    padding: "1rem",
    border: "1px solid #eee",
    borderRadius: 8,
    backgroundImage: "linear-gradient(-45deg, #fd5c3e 12%, white 100%)",
  },
  loginFormImage: {
    height: 80,
    width: 80,
    marginBottom: "2rem",

    "& > img": {
      height: "100%",
      width: "100%",
    },
  },
  loginFormFieldSection: {
    marginBottom: "2rem",
  },
  loginFormField: {
    marginBottom: ".75rem",
  },
  loginFormTitle: {
    marginBottom: "2rem",
  },
}));

export default useStyles;
