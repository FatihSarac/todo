import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./FormStyle";
import * as BiIcons from "react-icons/bi";
import { connect } from "react-redux";
import { addTask } from "../../redux/Actions/TaskAction";

const Form = (props) => {
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState(false);
  const style = useStyles();
  const { addTask } = props;

  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem) {
      addTask(todoItem);
      setError(false);
      setTodoItem("");
    } else {
      setError(true);
    }
  };

  return (
    <Grid item xs={12}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Add To Do"
          id="outlined-basic"
          variant="outlined"
          onChange={handleChange}
          helperText={error ? "Please enter a value" : ""}
          value={todoItem}
          size="small"
          InputProps={{
            endAdornment: (
              <BiIcons.BiAddToQueue
                onClick={handleSubmit}
                className={style.addIcon}
              />
            ),
          }}
        />
      </form>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.taskReducer.list,
  };
};

export default connect(mapStateToProps, { addTask })(Form);
