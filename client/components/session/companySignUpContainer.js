import { connect } from "react-redux";

import SessionForm from "./sessionForm";
import { signInCompany } from "../../actions/sessionActions";

const mapStateToProps = state => ({
  formType: "Sign In Company"
});

const mapDispatchToProps = dispatch => ({
  processForm: company => dispatch(signInCompany(company))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
