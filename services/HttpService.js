// General imports
import axios from 'axios';

// Should local server be used
const isLocalServer = process.env.NEXT_PUBLIC_LOCAL_SERVER;

// Response interceptors
axios.interceptors.response.use(
  (response) => response,
  (error) => error
);

/**
 * Class represents the http client. It implements the methods needed for communication
 * with server.
 *
 * @class HttpService
 */
class HttpService {
  /**
   * Gets the base url.
   *
   * @returns API's URL
   */
  static _getBaseUrl = () => {
    if (isLocalServer) {
      return 'https://localhost:5001/v1/';
    }

    return 'https://pokeapi.co/api/v2/';
  };

  /**
   * Gets the default headers.
   *
   * @returns default headers
   */
  static _getDefaultHeaders = () => { };

  /**
   * Makes the HTTP request.
   *
   * @static
   * @param {string} method HTTP request method
   * @param {string} url URL
   * @param {Object} data Payload that will be sent along with request
   * @param {Object} [headers={}] Request headers
   * @returns {Promise<any>} Promise
   * @memberof HttpService
   */
  static async _request(method, url, data, headers) {
    // Prepares the request payload
    let request = {
      url: `${HttpService._getBaseUrl()}${url}`,
      method,
      headers: {
        ...(HttpService._getDefaultHeaders()),
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
   * @memberof HttpService
   */
  static async get(url, data, headers) {
    return HttpService._request('get', url, data, headers, {});
  }

  /**
   * Makes the POST HTTP request.
   *
   * @static
   * @param {string} url URL
   * @param {Object} data Payload that will be sent along with request
   * @param {Object} [headers={}] Request headers
   * @returns {Promise<any>} Promise
   * @memberof HttpService
   */
  static async post(url, data, headers, config) {
    //  Remove comment when API is finished
    return HttpService._request('post', url, data, headers, config);
  }

  /**
   * Makes the PUT HTTP request.
   *
   * @static
   * @param {string} url URL
   * @param {Object} data Payload that will be sent along with request
   * @param {Object} [headers={}] Request headers
   * @returns {Promise<any>} Promise
   * @memberof HttpService
   */
  static async put(url, data, headers) {
    //  Remove comment when API is finished
    return HttpService._request('put', url, data, headers);
  }

  /**
   * Makes the DELETE HTTP request.
   *
   * @static
   * @param {string} url URL
   * @param {Object} data Payload that will be sent along with request
   * @param {Object} [headers={}] Request headers
   * @returns {Promise<any>} Promise
   * @memberof HttpService
   */
  static async delete(url, data, headers) {
    return HttpService._request('delete', url, data, headers);
  }
}

// Export
export default HttpService;
