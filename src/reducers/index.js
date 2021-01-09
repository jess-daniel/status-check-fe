import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { resourceReducer } from "./resourceReducer";
import { logsReducer } from "./logsReducer";

export default combineReducers({
  user: userReducer,
  resources: resourceReducer,
  logs: logsReducer,
});
