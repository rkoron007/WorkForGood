import {
  RECEIVE_WORKER,
  RECEIVE_COMPANY,
  RECEIVE_SESSION_ERRORS
} from "../../actions/sessionActions";

const sessionReducer = (state = [], action) => {
  // don't mutate state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKER:
      return [];
    case RECEIVE_COMPANY:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default sessionReducer;
