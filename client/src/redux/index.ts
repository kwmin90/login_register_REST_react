import { combineReducers } from "redux";

import { statusReducer } from "./status/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  status: statusReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
