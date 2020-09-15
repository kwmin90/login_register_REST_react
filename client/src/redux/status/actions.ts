import { UPDATE_STATUS, StatusState, StatusActionTypes } from "./types";

export const updateStatus = (newStatus: StatusState): StatusActionTypes => {
  return {
    type: UPDATE_STATUS,
    payload: newStatus,
  };
};
