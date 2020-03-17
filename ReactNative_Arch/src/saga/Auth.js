import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import API from '../api/APIUrls';
import httpClient from '../api/HttpClient';
import API_CONST from '../api/APIConstants';

function* loginUser(action) {
  try {
    console.log('HttpClient');
    var postData = action.data;
    let response = yield call(httpClient, 'POST', API.LOGIN_USER, postData);

    let status = response.data.status;
    let responseData = '';

    if (status == 'success') {
      responseData = response.data;
    } else {
      alert(response.data.message);
    }
    yield put({
      type: 'ACTION_TYPES.LOGIN_USER',
      payload: response.data,
    });

    console.log(' registerUser response >>> ' + JSON.stringify(response));
  } catch (err) {
    alert(JSON.stringify(err));
    console.log('registerUser Error >>> ' + JSON.stringify(err));
    yield put({
      type: 'ACTION_TYPES.LOGIN_USER',
      payload: err,
    });
  }
}
function* registerMerchant(action) {
  try {
    var postData = action.data;
    let response = yield call(httpClient, 'POST', API.LOGIN_USER, postData);

    let status = response.data.status;
    let responseData = '';

    if (status == 'success') {
      responseData = response.data;
    } else {
      alert(response.data.message);
    }
    yield put({
      type: 'ACTION_TYPES.LOGIN_USER',
      payload: response.data,
    });

    console.log(' registerUser response >>> ' + JSON.stringify(response));
  } catch (err) {
    alert(JSON.stringify(err));
    console.log('registerUser Error >>> ' + JSON.stringify(err));
    yield put({
      type: 'ACTION_TYPES.LOGIN_USER',
      payload: err,
    });
  }
}
export const Auth = [
  takeLatest(API_CONST.N_LOGIN_USER, loginUser),
  takeEvery(API_CONST.N_M_REGISTER_USER, registerMerchant),
];
