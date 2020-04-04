import { connect } from "react-redux";

import SessionForm from "./sessionForm";
import { signUpWorker } from "../../actions/sessionActions";

const mapStateToProps = state => ({
  formType: "Sign Up"
});
const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signUpWorker(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
