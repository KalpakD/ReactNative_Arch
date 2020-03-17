import {combineReducers} from 'redux';
import SignInReducer from '../container/signIn/SignInReducer';
import React from 'react';
import SignUpReducer from '../container/signUp/SignUpReducer';

export default combineReducers({
  SignInReducer: SignInReducer,
  SignUpReducer: SignUpReducer,
  // ChatListReducer: ChatListReducer,
  // ContactListReducer: ContactListReducer,
});
