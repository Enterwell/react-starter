// General imports
import axios, { AxiosRequestConfig } from 'axios';

import { API_ENDPOINT } from '@/config/constants';

export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

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
 * @param method HTTP request method
 * @param url URL
 * @param data Payload that will be sent along with request
 * @param [headers={}] Request headers
 * @returns Promise
 */
async function _request(method: HttpMethod, url: string, data?: any, headers?: Record<string, string>) {
  // Prepares the request payload
  let request: AxiosRequestConfig = {
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
  } else if (data) {
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
 * @param url URL
 * @param data Payload that will be sent along with request
 * @param [headers={}] Request headers
 * @returns Promise
 */
export async function get(url: string, data?: any, headers?: Record<string, string>) {
  return _request('get', url, data, headers);
}

/**
 * Makes the POST HTTP request.
 *
 * @static
 * @param url URL
 * @param data Payload that will be sent along with request
 * @param [headers={}] Request headers
 * @returns Promise
 */
export async function post(url: string, data?: any, headers?: Record<string, string>) {
  return _request('post', url, data, headers);
}

/**
 * Makes the PUT HTTP request.
 *
 * @static
 * @param url URL
 * @param data Payload that will be sent along with request
 * @param [headers={}] Request headers
 * @returns Promise
 */
export async function put(url: string, data?: any, headers?: Record<string, string>) {
  return _request('put', url, data, headers);
}

/**
 * Makes the DELETE HTTP request.
 *
 * @static
 * @param url URL
 * @param data Payload that will be sent along with request
 * @param [headers={}] Request headers
 * @returns Promise
 */
export async function requestDelete(url: string, data?: any, headers?: Record<string, string>) {
  return _request('delete', url, data, headers);
}
