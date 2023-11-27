// General imports
import axios from 'axios';
import { API_ENDPOINT } from '../config/constants';

// Response interceptors
axios.interceptors.response.use(
  (response) => response,
  (error) => error
);

/**
   * Gets the base url.
   *
   * @returns API's URL
   */
function _getBaseUrl() {
  return API_ENDPOINT;
}

/**
 * Gets the default headers.
 *
 * @returns default headers
 */
function _getDefaultHeaders() { return {}; }

/**
 * Makes the HTTP request.
 *
 * @static
 * @param {string} method HTTP request method
 * @param {string} url URL
 * @param {Object} data Payload that will be sent along with request
 * @param {Object} [headers={}] Request headers
 * @returns {Promise<any>} Promise
 */
async function _request(method, url, data, headers) {
  // Prepares the request payload
  let request = {
    url: `${_getBaseUrl()}${url}`,
    method,
    headers: {
      ...(_getDefaultHeaders()),
      ...headers
    }
  };

  // Depending on the method, set the request data
  if (method.toLowerCase() !== 'get') {
    request = {
      ...request,
      data
    };
  } else if (data instanceof String) {
    request = data;
  } else if (data instanceof Object) {
    request = {
      ...request,
      params: data
    };
  }

  // Makes the post request
  return axios(request);
}

/**
 * Makes the GET HTTP request.
 *
 * @static
 * @param {string} url URL
 * @param {Object} data Payload that will be sent along with request
 * @param {Object} [headers={}] Request headers
 * @returns {Promise<any>} Promise
 */
export async function get(url, data, headers) {
  return _request('get', url, data, headers, {});
}

/**
 * Makes the POST HTTP request.
 *
 * @static
 * @param {string} url URL
 * @param {Object} data Payload that will be sent along with request
 * @param {Object} [headers={}] Request headers
 * @returns {Promise<any>} Promise
 */
export async function post(url, data, headers, config) {
  return _request('post', url, data, headers, config);
}

/**
 * Makes the PUT HTTP request.
 *
 * @static
 * @param {string} url URL
 * @param {Object} data Payload that will be sent along with request
 * @param {Object} [headers={}] Request headers
 * @returns {Promise<any>} Promise
 */
export async function put(url, data, headers) {
  return _request('put', url, data, headers);
}

/**
 * Makes the DELETE HTTP request.
 *
 * @static
 * @param {string} url URL
 * @param {Object} data Payload that will be sent along with request
 * @param {Object} [headers={}] Request headers
 * @returns {Promise<any>} Promise
 */
export async function requestDelete(url, data, headers) {
  return _request('delete', url, data, headers);
}
