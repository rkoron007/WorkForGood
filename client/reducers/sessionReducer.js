import {
  RECEIVE_WORKER,
  RECEIVE_COMPANY,
  LOGOUT_CURRENT_USER
} from "../actions/sessionActions";

const _nullCurrentUser = {
  id: null
};

const sessionReducer = (state = _nullCurrentUser, action) => {
  // don't mutate state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKER:
      return Object.assign({}, { id: action.worker.id });
    case RECEIVE_COMPANY:
      return Object.assign({}, { id: action.company.id });
    case LOGOUT_CURRENT_USER:
      return _nullCurrentUser;
    default:
      return state;
  }
};

export default sessionReducer;
