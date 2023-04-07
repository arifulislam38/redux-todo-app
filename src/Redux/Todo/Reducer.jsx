import initialState from "./InitialState";

import {
  ADDED,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  COLORSELECTED,
  REMOVED,
  TOGGLED,
} from "./ActionType";

const newId = (state) => {
  if (state.length > 0) {
    const ids = state.map((todo) => todo.id);
    const newId = Math.max(...ids) + 1;
    return newId;
  } else {
    return 0;
  }
  
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: newId(state),
          text: action.payload,
          completed: false,
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
      });
    case REMOVED:
      return state.filter((todo) => todo.id !== action.payload);

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          return {
            ...todo,
            color,
          };
        }
      });

    case CLEARCOMPLETE:
      return state.filter((todo) => !todo.completed);

    case ALLCOMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    default:
      return state;
  }
};

export default todoReducer;
