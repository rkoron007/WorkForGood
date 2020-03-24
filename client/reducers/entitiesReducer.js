import { combineReducers } from "redux";
import workersReducer from "./workersReducer";
import companiesReducer from "./companiesReducer";

const entitiesReducer = combineReducers({
  workers: workersReducer,
  companies: companiesReducer
});

export default entitiesReducer;
