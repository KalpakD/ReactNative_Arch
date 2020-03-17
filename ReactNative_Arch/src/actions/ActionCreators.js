import API_CONST from '../api/APIConstants';
import ACTION_TYPES from '../Action/ActionTypes';

export const loginUser = data => {
  return {
    type: API_CONST.N_LOGIN_USER,
    data,
  };
};
