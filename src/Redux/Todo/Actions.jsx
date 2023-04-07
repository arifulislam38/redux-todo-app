import {
  ADDED,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  COLORSELECTED,
  REMOVED,
  TOGGLED,
} from "./ActionType";

export const added = (todotext) => {
  return {
    type: ADDED,
    payload: todotext,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const removed = (todoId) => {
  return {
    type: REMOVED,
    payload: todoId,
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};

export const allComplted = () => {
  return {
    type: ALLCOMPLETE,
  };
};
export const clearComplete = () => {
  return {
    type: CLEARCOMPLETE,
  };
};
