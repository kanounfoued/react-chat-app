import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CustomField from "../../component/CustomField";
import useStyles from "./style";
const path = require("path");

const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.loginForm}>
        <Grid className={classes.loginFormImage}>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />
        </Grid>
        <Grid className={classes.loginFormTitle}>
          <Typography variant="subtitle1">Chap App</Typography>
        </Grid>

        <Grid container className={classes.loginFormFieldSection}>
          <Grid container className={classes.loginFormField}>
            <CustomField
              label="Email"
              onChange={handleOnChangeEmail}
              value={email}
              required
              size="small"
            />
          </Grid>
          <Grid container className={classes.loginFormField}>
            <CustomField
              label="Password"
              onChange={handleOnChangePassword}
              type="password"
              value={password}
              required
              size="small"
            />
          </Grid>
        </Grid>
        <Grid>
          <Button>Login</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
