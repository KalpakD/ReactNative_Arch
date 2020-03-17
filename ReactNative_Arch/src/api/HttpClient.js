import axios from 'axios';
import API, {BASE_URL} from './APIUrls';
import {getItem} from '../utils/AsyncUtils';

/*
  Base client config for your application.
  Here you can define your base url, headers,
  timeouts and middleware used for each request.
*/
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.post['Access-Control-Allow-Methods'] =
//   'GET,PUT,POST,PATCH,DELETE,OPTIONS';
// axios.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
// axios.defaults.headers.post['Access-Control-Allow-Headers'] =
//   'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization';

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  // headers: {'content-type': 'application/json'},
});

// Custom middleware for requests (this one just logs the error).
client.interceptors.request.use(
  async request => {
    console.log('request:' + JSON.stringify(request));
    try {
      // const userData = await getItem('USER_DATA');
      // config.headers.Authorization = userData
      //   ? 'Bearer ' + userData.authorization_token
      //   : '';
    } catch (e) {
      console.log('Client Interceptor (Token) : ' + JSON.stringify(e));
    }
    return request;
  },
  error => {
    console.log('Failed to make request with error: ');
    console.log(JSON.stringify(error));
    return Promise.reject(error);
  },
);

// Custom middleware for responses (this one just logs the error).
client.interceptors.response.use(
  response => {
    console.log('Response:' + JSON.stringify(response));
    return response;
  },
  error => {
    console.log('Request got response with error:');
    console.log(error);
    return Promise.reject(error);
  },
);

/** function that returns an axios call */
const httpClient = (type, url, params, headers) => {
  console.log('HttpClient');
  return client.request({
    method: type,
    url: url,
    data: params,
    headers: headers,
  });
};

export default httpClient;
