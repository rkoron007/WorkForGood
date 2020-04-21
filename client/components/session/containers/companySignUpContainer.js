import { connect } from "react-redux";

import signUpForm from "../signUpForm";
import { signUpCompany } from "../../../actions/sessionActions";

const mapStateToProps = ({ errors: { session } }) => ({
  formType: "Sign Up Company",
  user: {
    name: "",
    password: "",
    email: "",
    websiteUrl: "",
    description: "",
    workField: "",
    city: "",
    ein: "",
    missionStatement: "",
  },
  errors: session,
  formFor: "company",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (company) => dispatch(signUpCompany(company)),
});

export default connect(mapStateToProps, mapDispatchToProps)(signUpForm);
