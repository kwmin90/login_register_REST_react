import { UserState, UPDATE_USER, UserActionTypes } from "./types";

const initialUserState: UserState = {
  email: "",
  firstName: "",
  lastName: "",
};

export const userReducer = (
  state = initialUserState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
