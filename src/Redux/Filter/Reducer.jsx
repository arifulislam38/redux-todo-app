import { COLOURCHANGE, STATUSCHANGE } from "./ActionTypes";
import { INITIALSTATE } from "./InitialState";

export const filterReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case STATUSCHANGE:
      return {
        ...state,
        status: action.payload,
      };
    case COLOURCHANGE:
      const { changeType, color } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "remove":
          return {
            ...state,
            colors: state.colors.filter((colorExit) => colorExit !== color),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};
