import React from 'react';
import Auth from './Auth';
import Dashboard from './Dashboard';
import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import API from '../api/APIUrls';
import httpClient from '../api/HttpClient';
import API_CONST from '../api/APIConstants';
import ACTION_TYPES from '../actions/ActionTypes';
// function* rootSaga() {
//   yield all([Auth, Dashboard]);
// }
// export default rootSaga;
function* loginUser(action) {
  try {
    var postData = action.data;
    let response = yield call(httpClient, 'POST', API.LOGIN_USER, postData);
    console.log(' registerUser response >>> ' + JSON.stringify(response));
    let isSuccess = response.data.isSuccess;
    let responseData = '';

    if (isSuccess) {
      responseData = response.data;
    } else {
      alert(response.data.message);
    }
    yield put({
      type: ACTION_TYPES.LOGIN_USER,
      payload: response.data,
    });
  } catch (err) {
    alert(JSON.stringify(err));
    console.log('registerUser Error >>> ' + JSON.stringify(err));
    yield put({
      type: ACTION_TYPES.LOGIN_USER,
      payload: err,
    });
  }
}

function* rootSaga() {
  yield takeLatest(API_CONST.N_LOGIN_USER, loginUser);
}
export default rootSaga;
