import Grid from "@material-ui/core/Grid";
import Message from "../Message";
import useStyles from "./style";

const messages = [
  {
    id: "dqslfqsdjnf",
    message: "text",
  },
  {
    id: "qsmdf",
    message: "kanoun",
  },
  {
    id: "sl,kllze",
    message: "mohamed",
  },
  {
    id: "ze,z:e;,",
    message: "foued",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
  {
    id: "az;,nqd",
    message: "salam",
  },
];

const MessengerMessage = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {messages.map((message) => {
        return <Message key={message.id} message={message} />;
      })}
    </Grid>
  );
};

export default MessengerMessage;
