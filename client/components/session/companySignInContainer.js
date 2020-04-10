import { connect } from "react-redux";

import SignInForm from "./signInForm";
import { signInCompany } from "../../actions/sessionActions";

const mapStateToProps = ({ errors: { session } }) => ({
  formType: "Sign In Company",
  errors: session,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (company) => dispatch(signInCompany(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
