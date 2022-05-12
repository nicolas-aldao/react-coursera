import * as ActionTypes from "./ActionTypes";

export const Feedback = (state = { errMess: null, feedback: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACKS:
      return { ...state, errMess: null, feedback: action.payload };

    case ActionTypes.ADD_FEEDBACK:
      var myFeedback = action.payload;
      return { ...state, feedback: state.feedback.concat(myFeedback) };

    default:
      return state;
  }
};
