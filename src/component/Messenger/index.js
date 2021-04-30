import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style";
import MessengerBar from "../MessengerBar";
import MessengerMessage from "../MessengerMessage";
import MessengerInput from "../MessengerInput";

const Messenger = () => {
  const classes = useStyles();

  const [text, setText] = useState("");

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Grid className={classes.root} container>
      <MessengerBar />
      <MessengerMessage />
      <MessengerInput
        value={text}
        onChange={onTextChange}
        label="Type here ..."
      />
    </Grid>
  );
};
export default Messenger;
