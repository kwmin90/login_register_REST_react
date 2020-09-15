import { UserState, UPDATE_USER, UserActionTypes } from "./types";

export const updateUser = (newUser: UserState): UserActionTypes => {
  return {
    type: UPDATE_USER,
    payload: newUser,
  };
};
