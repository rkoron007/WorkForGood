import { RECEIVE_WORKER } from "../actions/sessionActions";

const workersReducer = (state = {}, action) => {
  // don't mutate state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKER:
      return Object.assign({}, { [action.worker.id]: action.worker });
    default:
      return state;
  }
};

export default workersReducer;
