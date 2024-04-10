import { combineReducers } from "redux";
import { auth } from "../Auth";

const rootReducer = combineReducers({
  auth: auth,
});
export default rootReducer;
