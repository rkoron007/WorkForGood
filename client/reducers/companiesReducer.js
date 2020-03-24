import { RECEIVE_COMPANY } from "../actions/sessionActions";

const companiesReducer = (state = {}, action) => {
  // don't mutate state
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMPANY:
      return Object.assign({}, { [action.company.id]: action.company });
    default:
      return state;
  }
};

export default companiesReducer;
