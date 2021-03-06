import App from "../components/App";
import { connect } from "react-redux";
import { asyncMinus, minus, plus } from "../actions";

const mapStateToProps = state => {
  return {
    number: state.number,
    day: state.day,
    title: state.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    plus: num => {
      dispatch(plus(num));
    },
    minus: num => {
      dispatch(minus(num));
    },
    asyncMinus: num => {
      dispatch(asyncMinus(num));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);