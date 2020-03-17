import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import API from '../api/APIUrls';
import httpClient from '../api/HttpClient';
import React from 'react';
import API_CONST from '../api/APIConstants';

function* user(action) {
  try {
    var postData = action.data;
    let response = yield call(httpClient, 'GET', '/User');

    let status = response.data.status;
    let responseData = '';

    if (status == 'success') {
      responseData = response.data;
    } else {
      alert(response.data.message);
    }
    yield put({
      type: 'ACTION_TYPES.USER',
      payload: response.data,
    });

    console.log(' registerUser response >>> ' + JSON.stringify(response));
  } catch (err) {
    alert(JSON.stringify(err));
    console.log('registerUser Error >>> ' + JSON.stringify(err));
    yield put({
      type: 'ACTION_TYPES.USER',
      payload: err,
    });
  }
}
// export const barSagas = [
//   takeEvery("BAR_A", barASaga),
//   takeEvery("BAR_B", barBSaga),
// ];
export default Dashboard = [takeEvery('API_CONST.N_USER', user)];
