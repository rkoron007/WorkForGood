import { connect } from "react-redux";

import SessionForm from "./sessionForm";
import { signInWorker } from "../../actions/sessionActions";

const mapStateToProps = state => ({
  formType: "Sign In Worker"
});
const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signInWorker(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
