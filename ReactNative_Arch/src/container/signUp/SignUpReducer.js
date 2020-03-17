import ACTION_TYPES from '../../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.M_REGISTER_USER:
      return {...state, registerRes: action.payload};

    default:
      return state;
  }
};
