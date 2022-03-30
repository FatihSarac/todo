import { IconButton, TextField, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Row, Text, ToggleRow, useStyles } from "./ListItemStyle";
import * as BiIcons from "react-icons/bi";
import { connect } from "react-redux";
import { completedTask, updateTask } from "../../redux/Actions/TaskAction";

const ListItem = (props) => {
  const { item, completedTask, updateTask } = props;

  const [edit, setEdit] = useState(false);
  const [updateContent, setUpdateContent] = useState({
    content: item.content,
    id: item.id,
    completed: item.completed,
  });

  const style = useStyles();

  const handleChange = (e) => {
    setUpdateContent({ ...updateContent, content: e.target.value });
  };

  const handleSubmit = (e) => {
    if (updateContent.content) {
      updateTask(updateContent);
      setEdit(false);
    }
  };

  return (
    <Row item justifyContent="space-between">
      {edit ? (
        <>
          <TextField
            id="standard-basic"
            variant="standard"
            onChange={handleChange}
            value={updateContent.content}
            size="small"
            InputProps={{
              classes: {
                input: style.Input,
              },
            }}
          />

          <Tooltip
            title={updateContent.content ? "" : "Please enter a value"}
            placement="top"
          >
            <IconButton onClick={handleSubmit}>
              <BiIcons.BiCheckSquare className={style.editIcon} />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          <ToggleRow item onClick={() => completedTask(item.id)}>
            <Text className={item.completed ? style.strike : ""}>
              {item.content}
            </Text>
          </ToggleRow>
          <Tooltip
            title={item.completed ? "You can't edit because is completed" : ""}
            placement="top"
          >
            <IconButton onClick={() => (item.completed ? "" : setEdit(true))}>
              <BiIcons.BiEdit className={style.editIcon} />
            </IconButton>
          </Tooltip>
        </>
      )}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  completedTask,
  updateTask,
})(ListItem);
