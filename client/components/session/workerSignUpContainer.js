import { connect } from "react-redux";
import signUpForm from "./signUpForm";
import { signUpCompany } from "../../actions/sessionActions";

const mapStateToProps = ({ errors: { session } }) => ({
  formType: "Sign Up Worker",
  user: {
    name: "",
    lastName: "",
    password: "",
    email: "",
    websiteUrl: "",
    description: "",
    occupation: "",
    city: "",
    fieldsOfInterest: "",
  },
  errors: session,
  formFor: "worker",
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signUpCompany(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(signUpForm);
