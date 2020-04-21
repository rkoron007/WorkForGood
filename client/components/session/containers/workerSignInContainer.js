import { connect } from "react-redux";

import SignInForm from "../signInForm";
import { signInWorker } from "../../../actions/sessionActions";

const mapStateToProps = ({ errors: { session } }) => ({
  formType: "Sign In Worker",
  errors: session,
});
const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signInWorker(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
