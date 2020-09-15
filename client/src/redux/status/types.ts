export interface StatusState {
  loggedIn: boolean;
}

export const UPDATE_STATUS = "UPDATE_STATUS";

interface UpdateStatusAction {
  type: typeof UPDATE_STATUS;
  payload: StatusState;
}

export type StatusActionTypes = UpdateStatusAction;
