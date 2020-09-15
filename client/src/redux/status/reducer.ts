import { StatusActionTypes, StatusState, UPDATE_STATUS } from "./types";

const initialStatusState: StatusState = {
  loggedIn: false,
};

export const statusReducer = (
  state = initialStatusState,
  action: StatusActionTypes
): StatusState => {
  switch (action.type) {
    case UPDATE_STATUS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
