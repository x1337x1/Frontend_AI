import axios from 'axios';

class AxiosClient {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://127.0.0.1:5000', // Your local server URL
      timeout: 10000, // Optional: set a timeout for requests
      headers: { 'Content-Type': 'application/json' } // Optional: set default headers
    });

    // Set up request interceptors
    this.axiosInstance.interceptors.request.use(
      config => {
        // Modify the request config before it is sent
        console.log('Request sent:', config);
        return config;
      },
      error => {
        // Handle request error
        return Promise.reject(error);
      }
    );

    // Set up response interceptors
    this.axiosInstance.interceptors.response.use(
      response => {
        // Handle response data
        console.log('Response received:', response);
        return response;
      },
      error => {
        // Handle response error
        return Promise.reject(error);
      }
    );
  }

 // GET request method
 get(url, config = {}) {
    return this.axiosInstance.get(url, config);
  }

  // POST request method
  post(url, data, config = {}) {
    return this.axiosInstance.post(url, data, config);
  }

  // PUT request method
  put(url, data, config = {}) {
    return this.axiosInstance.put(url, data, config);
  }

  // PATCH request method
  patch(url, data, config = {}) {
    return this.axiosInstance.patch(url, data, config);
  }

  // DELETE request method
  delete(url, config = {}) {
    return this.axiosInstance.delete(url, config);
  }
}

export default new AxiosClient();