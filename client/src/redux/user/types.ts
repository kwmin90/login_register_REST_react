export interface UserState {
  email: string;
  firstName: string;
  lastName: string;
}

export const UPDATE_USER = "UPDATE_USER";

interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: UserState;
}

export type UserActionTypes = UpdateUserAction;
