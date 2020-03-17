import ACTION_TYPES from '../../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_USER:
      return {...state, loginRes: action.payload};

    default:
      return state;
  }
};
