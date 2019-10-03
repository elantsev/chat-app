import React from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
const ChatWindow = ({ classes, allChats, activeTopic }) => {
  return (
    <div className={classes.chatWindow}>
      {allChats[activeTopic].map((chat, i) => (
        <div key={i} className={classes.flex}>
          <Chip label={chat.from} className={classes.chip} />
          <Typography component="p">{chat.msg}</Typography>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
