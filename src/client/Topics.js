import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const Topics = ({ classes, topics, setActiveTopic }) => {
  return (
    <div className={classes.topicsWindow}>
      <List>
        {topics.map(topic => (
          <ListItem onClick={() => setActiveTopic(topic)} key={topic} button>
            <ListItemText primary={topic} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Topics;
