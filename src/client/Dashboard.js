import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CTX } from "./Store";
import Topics from "./Topics";
import ChatWindow from "./ChatWindow";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey",
    padding: "20px"
  },
  chatWindow: {
    width: "70%",
    height: "300px"
  },
  chatBox: {
    width: "85%",
    margin: 0
  },
  button: {
    width: "15%"
  }
}));
const Dashboard = () => {
  const classes = useStyles();

  //CTX store
  const { allChats, sendChatAction } = React.useContext(CTX);

  const topics = Object.keys(allChats);

  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [textValue, changeTextValue] = useState("");

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat App
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <Topics
            classes={classes}
            topics={topics}
            setActiveTopic={setActiveTopic}
          />
          <ChatWindow
            classes={classes}
            allChats={allChats}
            activeTopic={activeTopic}
          />
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              sendChatAction({
                msg: textValue,
                from: "username",
                topic: activeTopic
              });
              changeTextValue("");
            }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
