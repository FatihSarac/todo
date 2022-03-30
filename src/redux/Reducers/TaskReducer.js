const initialState = {
  list: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Math.random().toString(36).slice(2),
            content: action.payload,
            completed: false,
          },
        ],
      };

    case "DELETE_ALL_TASK":
      return {
        ...state,
        list: state.list.filter((item) => item.completed === false),
      };

    case "UPDATE_TASK":
      return {
        ...state,
        list: [
          ...state.list.map((item) =>
            item.id == action.payload.id ? { ...action.payload } : item
          ),
        ],
      };

    case "COMPLETED_TASK":
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };

    default:
      return state;
  }
};
