export const addTask = (task) => {
  return { type: "ADD_TASK", payload: task };
};

export const updateTask = (task, id) => {
  return { type: "UPDATE_TASK", payload: task, id };
};

export const completedTask = (id) => {
  return { type: "COMPLETED_TASK", payload: id };
};

export const deleteAllTask = () => {
  return { type: "DELETE_ALL_TASK" };
};
