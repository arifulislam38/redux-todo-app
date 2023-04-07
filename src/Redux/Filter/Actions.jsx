import { COLOURCHANGE, STATUSCHANGE } from "./ActionTypes"

export const statusChange = (status) => {
    return {
        type: STATUSCHANGE,
        payload: status
    }
};

export const colorChange = (changeType, color) => {
    return {
        type: COLOURCHANGE,
        payload: {
            changeType,
            color
        }
    }
};