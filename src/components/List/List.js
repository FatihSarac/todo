import { Button, Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import ListItem from "../ListItem/ListItem";
import { useStyles } from "./ListStyle";
import { deleteAllTask } from "../../redux/Actions/TaskAction";

const List = (props) => {
  const style = useStyles();
  const { list, deleteAllTask } = props;

  return (
    <Grid container className={style.ListContainer}>
      {list.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}

      {list.length ? (
        <Button onClick={deleteAllTask} className={style.deleteButton}>
          Delete all completed task
        </Button>
      ) : (
        ""
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.taskReducer.list,
  };
};

export default connect(mapStateToProps, { deleteAllTask })(List);
