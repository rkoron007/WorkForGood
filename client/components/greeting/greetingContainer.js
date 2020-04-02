import { connect } from "react-redux";
import { signOut } from "../../util/sessionApiUtil";
import Greeting from "./greeting";

const mapStateToProps = ({ session, entities }) => {
  let user = entities.workers[session.id];
  debugger;
  return {
    user
  };
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut)
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
